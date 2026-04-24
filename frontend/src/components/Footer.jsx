import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, Instagram, Linkedin, Facebook } from "lucide-react";
import { COMPANY, CATEGORIES } from "../data/products";

const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/", Icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/", Icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/", Icon: Facebook },
];

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#1a2e20] text-[#eae6df] pt-20 pb-10 px-6 md:px-12 mt-0"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand block */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src="/images/brand/logo.jpeg"
                alt="ROCK AGRI"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div>
              <div className="font-heading text-2xl text-white">ROCK AGRI</div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#c59c34]">
                Since {COMPANY.since}
              </div>
            </div>
          </div>
          <p className="text-sm text-[#eae6df]/70 leading-relaxed">
            Premium quality agro commodities from India — exporting to the Middle
            East, Africa, Asia, and Europe.
          </p>

          {/* Social icons */}
          <div className="mt-6 flex items-center gap-3" data-testid="footer-socials">
            {SOCIALS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                data-testid={`social-${name.toLowerCase()}`}
                className="w-10 h-10 flex items-center justify-center border border-[#eae6df]/20 text-[#eae6df]/80 hover:border-[#c59c34] hover:text-[#c59c34] hover:bg-white/[0.03] transition-colors duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <div className="overline text-[#c59c34] mb-5">Explore</div>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-[#c59c34] transition-colors" data-testid="footer-link-home">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#c59c34] transition-colors" data-testid="footer-link-about">About Us</Link></li>
            <li><Link to="/products" className="hover:text-[#c59c34] transition-colors" data-testid="footer-link-products">All Products</Link></li>
            <li><Link to="/contact" className="hover:text-[#c59c34] transition-colors" data-testid="footer-link-contact">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <div className="overline text-[#c59c34] mb-5">Categories</div>
          <ul className="space-y-3 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/products/${c.slug}`}
                  className="hover:text-[#c59c34] transition-colors"
                  data-testid={`footer-category-${c.slug}`}
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="overline text-[#c59c34] mb-5">Get in Touch</div>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-[#c59c34] flex-shrink-0" />
              <span className="text-[#eae6df]/80 leading-relaxed">
                {COMPANY.address.line1}, {COMPANY.address.line2},{" "}
                {COMPANY.address.line3}, {COMPANY.address.line4}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#c59c34]" />
              <a href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`} className="hover:text-[#c59c34]" data-testid="footer-phone">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#c59c34]" />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-[#c59c34]" data-testid="footer-email">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Globe className="w-4 h-4 text-[#c59c34]" />
              <span className="text-[#eae6df]/80">{COMPANY.website}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#eae6df]/15 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#eae6df]/60">
        <span>© {new Date().getFullYear()} ROCK AGRI. All rights reserved.</span>
        <span className="tracking-[0.2em] uppercase">Rajkot, Gujarat · India</span>
      </div>
    </footer>
  );
}
