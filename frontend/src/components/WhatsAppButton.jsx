import { useEffect, useState } from "react";
import { COMPANY } from "../data/products";

// Inline WhatsApp SVG so we don't depend on icon library variants
const WhatsAppIcon = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19.11 17.2c-.28-.14-1.65-.82-1.9-.91-.26-.09-.44-.14-.63.14-.19.28-.72.91-.89 1.09-.16.19-.32.21-.6.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.44.12-.58.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.51-.86-2.07-.23-.55-.46-.47-.63-.48h-.53c-.19 0-.49.07-.75.35s-1 .97-1 2.37 1.03 2.75 1.17 2.94c.14.19 2.02 3.09 4.9 4.33.69.3 1.22.48 1.64.61.69.22 1.31.19 1.8.11.55-.08 1.65-.67 1.88-1.32.23-.64.23-1.2.17-1.32-.07-.12-.26-.19-.54-.33zM16 3C8.82 3 3 8.82 3 16c0 2.3.61 4.46 1.67 6.33L3 29l6.88-1.62A12.96 12.96 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.71c-2.06 0-3.99-.58-5.64-1.58l-.4-.24-4.08.97.98-3.98-.26-.42A10.7 10.7 0 015.29 16C5.29 10.1 10.1 5.29 16 5.29S26.71 10.1 26.71 16 21.9 26.71 16 26.71z" />
  </svg>
);

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  const message = encodeURIComponent(
    `Hello ROCK AGRI, I'd like to inquire about your products.`
  );
  const href = `https://wa.me/${COMPANY.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      data-testid="whatsapp-fab"
      className={`fixed bottom-6 right-6 z-[99] flex items-center justify-center gap-2 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Pulsing ring */}
      <span className="absolute inline-flex h-14 w-14 rounded-full bg-[#25d366] opacity-50 animate-ping" />
      <span className="relative bg-[#25d366] hover:bg-[#1fb858] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.5)] hover:scale-105 transition-transform duration-300">
        <WhatsAppIcon className="w-7 h-7" />
      </span>
    </a>
  );
}
