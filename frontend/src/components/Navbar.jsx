import { useCallback, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { COMPANY, CATEGORIES } from "../data/products";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products", hasDropdown: true },
  { to: "/contact", label: "Contact" },
];

const SCROLL_THRESHOLD = 20;

/** Resolves the header background class. */
function getHeaderBg({ scrolled, onDarkHero }) {
  if (scrolled) return "bg-[#f9f8f6]/95 backdrop-blur-xl border-b border-[#1a2e20]/10";
  if (onDarkHero) return "bg-gradient-to-b from-black/40 to-transparent";
  return "bg-[#f9f8f6]/90 backdrop-blur border-b border-[#1a2e20]/5";
}

/** Resolves nav-link text color class based on state. */
function getNavLinkColor({ isActive, onDarkHero }) {
  if (isActive) return "text-[#c59c34]";
  if (onDarkHero) return "text-white hover:text-[#c59c34]";
  return "text-[#1a2e20] hover:text-[#c59c34]";
}

function BrandMark({ onDarkHero }) {
  const nameClass = onDarkHero ? "text-white" : "text-[#1a2e20]";
  const taglineClass = onDarkHero ? "text-[#c59c34]" : "text-[#5c6a61]";
  return (
    <Link to="/" data-testid="navbar-logo" className="flex items-center gap-3 group">
      <div className="w-11 h-11 rounded-full overflow-hidden bg-white border border-[#eae6df] shadow-sm">
        <img src="/images/brand/logo.jpeg" alt="ROCK AGRI" className="w-full h-full object-cover" />
      </div>
      <div className="leading-tight">
        <div className={`font-heading text-xl font-semibold tracking-wide ${nameClass}`}>
          ROCK AGRI
        </div>
        <div className={`text-[10px] tracking-[0.25em] uppercase ${taglineClass}`}>
          Global Agro Exporter
        </div>
      </div>
    </Link>
  );
}

function ProductsDropdown() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4" data-testid="products-dropdown">
      <div className="bg-white border border-[#eae6df] shadow-[0_8px_30px_rgba(26,46,32,0.12)] min-w-[280px] py-2">
        <Link
          to="/products"
          className="block px-6 py-3 text-xs tracking-[0.25em] uppercase font-bold text-[#5c6a61] hover:text-[#c59c34]"
          data-testid="dropdown-all-products"
        >
          All Products
        </Link>
        <div className="h-px bg-[#eae6df] mx-6" />
        {CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            to={`/products/${c.slug}`}
            data-testid={`dropdown-${c.slug}`}
            className="block px-6 py-3 text-sm text-[#1a2e20] hover:bg-[#f9f8f6] hover:text-[#c59c34] transition-colors"
          >
            {c.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

function ProductsNavItem({ item, onDarkHero }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <NavLink
        to={item.to}
        data-testid={`nav-link-${item.label.toLowerCase()}`}
        className={({ isActive }) =>
          `flex items-center gap-1 text-sm tracking-wider uppercase font-semibold transition-colors ${getNavLinkColor(
            { isActive, onDarkHero }
          )}`
        }
      >
        {item.label}
        <ChevronDown className="w-4 h-4" />
      </NavLink>
      {open && <ProductsDropdown />}
    </div>
  );
}

function SimpleNavItem({ item, onDarkHero }) {
  return (
    <NavLink
      to={item.to}
      end={item.to === "/"}
      data-testid={`nav-link-${item.label.toLowerCase()}`}
      className={({ isActive }) =>
        `text-sm tracking-wider uppercase font-semibold transition-colors ${getNavLinkColor(
          { isActive, onDarkHero }
        )}`
      }
    >
      {item.label}
    </NavLink>
  );
}

function DesktopNav({ onDarkHero }) {
  return (
    <nav className="hidden lg:flex items-center gap-10">
      {NAV_ITEMS.map((item) =>
        item.hasDropdown ? (
          <ProductsNavItem key={item.to} item={item} onDarkHero={onDarkHero} />
        ) : (
          <SimpleNavItem key={item.to} item={item} onDarkHero={onDarkHero} />
        )
      )}
      <a
        href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
        data-testid="navbar-call-btn"
        className="btn-primary text-xs"
      >
        Call Us
      </a>
    </nav>
  );
}

function MobileMenu() {
  return (
    <div className="lg:hidden bg-[#f9f8f6] border-t border-[#1a2e20]/10" data-testid="mobile-menu">
      <div className="px-6 py-6 flex flex-col gap-4">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            data-testid={`mobile-nav-${item.label.toLowerCase()}`}
            className={({ isActive }) =>
              `text-base tracking-wider uppercase font-semibold py-2 ${
                isActive ? "text-[#c59c34]" : "text-[#1a2e20]"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
        <div className="pt-2 border-t border-[#eae6df] flex flex-col gap-1">
          <div className="overline">Categories</div>
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to={`/products/${c.slug}`}
              className="py-1 text-sm text-[#1a2e20]"
              data-testid={`mobile-category-${c.slug}`}
            >
              {c.name}
            </Link>
          ))}
        </div>
        <a
          href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
          data-testid="mobile-call-btn"
          className="btn-primary mt-3 w-full justify-center"
        >
          Call {COMPANY.phone}
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Track scroll to switch header style
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobile = useCallback(() => setOpen((v) => !v), []);

  const onDarkHero = location.pathname === "/" && !scrolled;
  const toggleColor = onDarkHero ? "text-white" : "text-[#1a2e20]";

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderBg({
        scrolled,
        onDarkHero,
      })}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <BrandMark onDarkHero={onDarkHero} />
        <DesktopNav onDarkHero={onDarkHero} />
        <button
          data-testid="mobile-menu-toggle"
          className={`lg:hidden p-2 ${toggleColor}`}
          onClick={toggleMobile}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && <MobileMenu />}
    </header>
  );
}
