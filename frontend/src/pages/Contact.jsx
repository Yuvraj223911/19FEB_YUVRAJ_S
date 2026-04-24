import { useState } from "react";
import axios from "axios";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { COMPANY } from "../data/products";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    message: "",
  });
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "loading", msg: "" });
    try {
      await axios.post(`${API}/inquiries`, form);
      setStatus({
        state: "success",
        msg: "Thank you! Your inquiry has been received. We'll email you back shortly.",
      });
      // Open mailto as a second channel so email also reaches info@rockagri.in
      // Use a programmatic anchor click to avoid navigating away from success state.
      const subject = encodeURIComponent(
        `New Inquiry from ${form.name || "Website Visitor"}`
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCountry: ${form.country}\nProduct of Interest: ${form.product}\n\nMessage:\n${form.message}`
      );
      const a = document.createElement("a");
      a.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setForm({
        name: "",
        email: "",
        phone: "",
        country: "",
        product: "",
        message: "",
      });
    } catch (err) {
      setStatus({
        state: "error",
        msg: "Something went wrong. Please try again or email us directly.",
      });
    }
  };

  return (
    <main data-testid="contact-page" className="bg-[#f9f8f6]">
      {/* HERO */}
      <section className="pt-36 pb-16 bg-[#1a2e20] text-white relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="overline text-[#c59c34] mb-5">Get in Touch</div>
          <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] max-w-3xl">
            Let's talk<br />
            <span className="italic text-[#c59c34]">exports.</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Fill the inquiry form, ring us, or stop by our office in Rajkot —
            whichever works for you.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Details */}
          <aside className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#eae6df] p-8">
              <div className="overline mb-5">Company</div>
              <div className="font-heading text-3xl text-[#1a2e20] mb-2">
                {COMPANY.name}
              </div>
              <p className="text-sm text-[#5c6a61]">Since {COMPANY.since}</p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4" data-testid="contact-address">
                  <MapPin className="w-5 h-5 text-[#c59c34] flex-shrink-0 mt-1" />
                  <div className="text-sm text-[#2c4c3b] leading-relaxed">
                    {COMPANY.address.line1}<br />
                    {COMPANY.address.line2}<br />
                    {COMPANY.address.line3}<br />
                    {COMPANY.address.line4}
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <Phone className="w-5 h-5 text-[#c59c34] flex-shrink-0" />
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
                    className="text-sm text-[#2c4c3b] hover:text-[#c59c34]"
                    data-testid="contact-phone"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
                <div className="flex gap-4 items-center">
                  <Mail className="w-5 h-5 text-[#c59c34] flex-shrink-0" />
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-sm text-[#2c4c3b] hover:text-[#c59c34]"
                    data-testid="contact-email"
                  >
                    {COMPANY.email}
                  </a>
                </div>
                <div className="flex gap-4 items-center">
                  <Globe className="w-5 h-5 text-[#c59c34] flex-shrink-0" />
                  <span className="text-sm text-[#2c4c3b]">{COMPANY.website}</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white border border-[#eae6df] overflow-hidden">
              <iframe
                title="ROCK AGRI Location"
                src={COMPANY.mapsEmbedSrc}
                width="100%"
                height="340"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="contact-map"
              />
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#eae6df] p-8 md:p-12">
              <div className="overline mb-3">Inquiry Form</div>
              <h2 className="font-heading text-3xl md:text-4xl text-[#1a2e20] leading-tight mb-2">
                Send us a message.
              </h2>
              <p className="text-sm text-[#5c6a61] mb-8">
                We'll respond within one business day at <strong>{COMPANY.email}</strong>.
              </p>

              <form onSubmit={onSubmit} className="space-y-5" data-testid="inquiry-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="overline mb-2 block" htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={onChange}
                      className="input-base"
                      placeholder="Your name"
                      data-testid="form-name"
                    />
                  </div>
                  <div>
                    <label className="overline mb-2 block" htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={onChange}
                      className="input-base"
                      placeholder="you@company.com"
                      data-testid="form-email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="overline mb-2 block" htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      className="input-base"
                      placeholder="+__ ____ ______"
                      data-testid="form-phone"
                    />
                  </div>
                  <div>
                    <label className="overline mb-2 block" htmlFor="country">Country</label>
                    <input
                      id="country"
                      name="country"
                      value={form.country}
                      onChange={onChange}
                      className="input-base"
                      placeholder="e.g. United Arab Emirates"
                      data-testid="form-country"
                    />
                  </div>
                </div>

                <div>
                  <label className="overline mb-2 block" htmlFor="product">Product of Interest</label>
                  <input
                    id="product"
                    name="product"
                    value={form.product}
                    onChange={onChange}
                    className="input-base"
                    placeholder="e.g. Turmeric, Soybean Meal, Chickpeas..."
                    data-testid="form-product"
                  />
                </div>

                <div>
                  <label className="overline mb-2 block" htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    className="input-base resize-none"
                    placeholder="Quantity, destination port, delivery timeline, etc."
                    data-testid="form-message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.state === "loading"}
                  className="btn-primary w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                  data-testid="form-submit"
                >
                  {status.state === "loading" ? "Sending..." : "Send Inquiry"}
                  <Send className="w-4 h-4" />
                </button>

                {status.state === "success" && (
                  <div
                    className="flex items-start gap-3 p-4 bg-[#e8f5ea] border border-[#25d366]/40 text-[#1a2e20] text-sm"
                    data-testid="form-success"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#25d366] flex-shrink-0" />
                    <span>{status.msg}</span>
                  </div>
                )}
                {status.state === "error" && (
                  <div
                    className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 text-red-800 text-sm"
                    data-testid="form-error"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{status.msg}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
