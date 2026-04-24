"""Backend tests for ROCK AGRI API."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://whatsapp-commerce-24.preview.emergentagent.com').rstrip('/')


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root(client):
    r = client.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    data = r.json()
    assert data.get("service") == "rock-agri"


def test_health(client):
    r = client.get(f"{BASE_URL}/api/health")
    assert r.status_code == 200
    data = r.json()
    assert data.get("status") == "healthy"


def test_create_inquiry_ok(client):
    payload = {
        "name": "TEST_User One",
        "email": "TEST_user1@example.com",
        "phone": "+91 9999999999",
        "country": "UAE",
        "product": "Turmeric",
        "message": "TEST_Please send quotation for 20ft container.",
    }
    r = client.post(f"{BASE_URL}/api/inquiries", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "created_at" in data
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["phone"] == payload["phone"]
    assert data["country"] == payload["country"]
    assert data["product"] == payload["product"]
    assert data["message"] == payload["message"]


def test_create_inquiry_minimal(client):
    payload = {
        "name": "TEST_Minimal",
        "email": "TEST_min@example.com",
        "message": "TEST_minimal msg",
    }
    r = client.post(f"{BASE_URL}/api/inquiries", json=payload)
    assert r.status_code == 200
    data = r.json()
    assert data["name"] == "TEST_Minimal"
    assert data["phone"] == ""
    assert data["country"] == ""
    assert data["product"] == ""


def test_create_inquiry_invalid_email(client):
    payload = {
        "name": "TEST_Bad",
        "email": "not-an-email",
        "message": "TEST_msg",
    }
    r = client.post(f"{BASE_URL}/api/inquiries", json=payload)
    assert r.status_code == 422


def test_create_inquiry_missing_name(client):
    payload = {"email": "TEST_x@example.com", "message": "TEST_msg"}
    r = client.post(f"{BASE_URL}/api/inquiries", json=payload)
    assert r.status_code == 422


def test_create_inquiry_missing_email(client):
    payload = {"name": "TEST_x", "message": "TEST_msg"}
    r = client.post(f"{BASE_URL}/api/inquiries", json=payload)
    assert r.status_code == 422


def test_create_inquiry_missing_message(client):
    payload = {"name": "TEST_x", "email": "TEST_x@example.com"}
    r = client.post(f"{BASE_URL}/api/inquiries", json=payload)
    assert r.status_code == 422


def test_list_inquiries(client):
    # seed one to guarantee non-empty
    seed = {
        "name": "TEST_List",
        "email": "TEST_list@example.com",
        "message": "TEST_list msg",
    }
    client.post(f"{BASE_URL}/api/inquiries", json=seed)

    r = client.get(f"{BASE_URL}/api/inquiries")
    assert r.status_code == 200
    rows = r.json()
    assert isinstance(rows, list)
    assert len(rows) >= 1
    # No ObjectId leak
    for row in rows:
        assert "_id" not in row
        assert "id" in row and "created_at" in row
    # Sorted desc by created_at
    created = [row["created_at"] for row in rows]
    assert created == sorted(created, reverse=True)
