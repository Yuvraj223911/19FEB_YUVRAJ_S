from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="ROCK AGRI API")

api_router = APIRouter(prefix="/api")


# ---------------- Models ----------------
class InquiryCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    phone: Optional[str] = Field(default="", max_length=40)
    country: Optional[str] = Field(default="", max_length=80)
    product: Optional[str] = Field(default="", max_length=120)
    message: str = Field(..., min_length=1, max_length=4000)


class Inquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: str = ""
    country: str = ""
    product: str = ""
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ---------------- Routes ----------------
@api_router.get("/")
async def root():
    return {"service": "rock-agri", "status": "ok"}


@api_router.get("/health")
async def health():
    try:
        await db.command("ping")
        return {"status": "healthy", "db": "connected"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"DB not reachable: {e}")


@api_router.post("/inquiries", response_model=Inquiry)
async def create_inquiry(payload: InquiryCreate):
    inquiry = Inquiry(
        name=payload.name.strip(),
        email=str(payload.email).strip(),
        phone=(payload.phone or "").strip(),
        country=(payload.country or "").strip(),
        product=(payload.product or "").strip(),
        message=payload.message.strip(),
    )
    doc = inquiry.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    await db.inquiries.insert_one(doc)
    return inquiry


@api_router.get("/inquiries", response_model=List[Inquiry])
async def list_inquiries(limit: int = 100):
    rows = await db.inquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for r in rows:
        if isinstance(r.get("created_at"), str):
            try:
                r["created_at"] = datetime.fromisoformat(r["created_at"])
            except Exception:
                r["created_at"] = datetime.now(timezone.utc)
    return rows


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
