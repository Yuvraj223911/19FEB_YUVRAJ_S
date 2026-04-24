import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Globe2, ShieldCheck, Truck, Ship, FileCheck2, Sprout } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "../data/products";

const WHY = [
  "15+ Years of Export Excellence",
  "Wide Agro Product Range Under One Roof",
  "Strict Quality Control & Inspection",
  "Bulk Supply & Container Load Expertise",
  "Competitive International Pricing",
  "On-Time Shipment Commitment",
];

const PROCESS = [
  { n: "01", title: "Sourcing from Verified Farms", icon: Sprout },
  { n: "02", title: "Cleaning & Processing", icon: ShieldCheck },
  { n: "03", title: "Quality Inspection", icon: FileCheck2 },
  { n: "04", title: "Export Packaging", icon: Truck },
  { n: "05", title: "Global Shipping & Documentation", icon: Ship },
];

const REGIONS = ["Middle East", "Africa", "Asia", "Europe"];

export default function Home() {
  // Pick 8 featured products — mix from categories
  const featured = [
    "turmeric", "black-pepper", "rapeseed-meal", "soybean-meal",
    "castor-seeds", "white-sesame-seeds", "chickpeas", "yellow-corn",
  ].map((s) => PRODUCTS.find((p) => p.slug === s)).filter(Boolean);

  return (
    <main data-testid="home-page">
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <img
          src="/images/brand/hero-bg.jpeg"
          alt="Agricultural produce"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1810]/90 via-[#1a2e20]/75 to-[#1a2e20]/20" />
        <div className="absolute inset-0 grain opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 w-full">
          <div className="max-w-3xl">
            <div className="fade-up" style={{ animationDelay: "0.1s" }}>
              <span className="overline text-[#c59c34]">Since 2010 · Rajkot, Gujarat · India</span>
            </div>
            <h1
              className="fade-up font-heading text-5xl md:text-7xl lg:text-8xl text-white leading-[1.02] mt-6 font-medium"
              style={{ animationDelay: "0.25s" }}
            >
              Rooted in India.<br />
              <span className="text-[#c59c34] italic font-normal">Trusted worldwide.</span>
            </h1>
            <p
              className="fade-up text-lg md:text-xl text-white/85 mt-8 max-w-xl leading-relaxed"
              style={{ animationDelay: "0.4s" }}
            >
              ROCK AGRI — Global Exporter of Spices, Oil Seeds, Beans &
              Animal Feed. Premium quality agro commodities, shipped from India
              to the world.
            </p>
            <div
              className="fade-up flex flex-wrap gap-4 mt-10"
              style={{ animationDelay: "0.55s" }}
            >
              <Link to="/products" className="btn-primary" data-testid="hero-cta-products">
                Explore Our Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn-light" data-testid="hero-cta-contact">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <div className="hidden lg:block absolute bottom-10 right-10 z-10 bg-white/95 backdrop-blur-md p-6 w-[280px] fade-up" style={{ animationDelay: "0.8s" }}>
          <div className="overline mb-2">We Export To</div>
          <div className="grid grid-cols-2 gap-2 text-sm font-medium text-[#1a2e20]">
            {REGIONS.map((r) => (
              <div key={r} className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#c59c34]" />{r}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-24 md:py-32 bg-[#f9f8f6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="overline mb-4">Welcome</div>
            <h2 className="font-heading text-4xl md:text-5xl leading-tight text-[#1a2e20]">
              Welcome to ROCK AGRI —<br />
              <span className="italic text-[#2c4c3b]">Global Agro Exporter from India</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <p className="text-lg text-[#2c4c3b] leading-relaxed mb-6">
              ROCK AGRI is a trusted exporter of <strong>Spices, Oil Seeds,
              Beans, and Animal Feed Ingredients</strong>, delivering quality
              products to international markets since 2010.
            </p>
            <p className="text-base text-[#5c6a61] leading-relaxed">
              Based in Gujarat, India, we are committed to providing consistent
              quality, competitive pricing, and reliable global supply to our
              partners worldwide.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[#eae6df] pt-10">
              <div>
                <div className="font-heading text-4xl text-[#c59c34]">15+</div>
                <div className="overline mt-1">Years</div>
              </div>
              <div>
                <div className="font-heading text-4xl text-[#c59c34]">30+</div>
                <div className="overline mt-1">Products</div>
              </div>
              <div>
                <div className="font-heading text-4xl text-[#c59c34]">4</div>
                <div className="overline mt-1">Continents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="overline mb-3">What We Export</div>
              <h2 className="font-heading text-4xl md:text-5xl leading-tight text-[#1a2e20]">
                Four categories.<br />
                <span className="italic">One trusted source.</span>
              </h2>
            </div>
            <Link to="/products" className="btn-outline self-start" data-testid="view-all-products">
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CATEGORIES.map((c, i) => {
              const firstProd = PRODUCTS.find((p) => p.category === c.slug);
              return (
                <Link
                  key={c.slug}
                  to={`/products/${c.slug}`}
                  data-testid={`home-category-card-${c.slug}`}
                  className="group relative aspect-[16/10] overflow-hidden bg-[#1a2e20]"
                >
                  <img
                    src={firstProd?.image}
                    alt={c.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e20] via-[#1a2e20]/40 to-transparent" />
                  <div className="relative h-full flex flex-col justify-end p-8">
                    <div className="overline text-[#c59c34] mb-2">
                      0{i + 1} / 04
                    </div>
                    <h3 className="font-heading text-4xl text-white mb-2">{c.name}</h3>
                    <p className="text-sm text-white/80 max-w-sm">{c.tagline}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm text-[#c59c34] font-semibold uppercase tracking-widest">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 md:py-32 bg-[#f9f8f6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-14">
            <div className="overline mb-3">Featured Products</div>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1a2e20] max-w-2xl leading-tight">
              A snapshot of what fills our containers.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <Link
                key={p.slug}
                to={`/product/${p.slug}`}
                className="group bg-white border border-[#eae6df] hover:border-[#1a2e20] transition-all duration-300 flex flex-col"
                data-testid={`featured-${p.slug}`}
              >
                <div className="aspect-square overflow-hidden bg-[#f9f8f6]">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <div className="overline text-[10px] mb-2">
                    {CATEGORIES.find((c) => c.slug === p.category)?.name}
                  </div>
                  <h4 className="font-heading text-xl text-[#1a2e20] leading-tight">
                    {p.name}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 md:py-32 bg-[#1a2e20] text-white relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="overline text-[#c59c34] mb-4">Why Global Buyers Choose Us</div>
              <h2 className="font-heading text-4xl md:text-5xl leading-tight">
                A partner that delivers,<br />
                <span className="italic text-[#c59c34]">container after container.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY.map((w) => (
                <div
                  key={w}
                  className="flex items-start gap-3 p-6 border border-white/10 hover:border-[#c59c34] transition-colors duration-300 bg-white/[0.02]"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#c59c34] flex-shrink-0 mt-0.5" />
                  <span className="text-base leading-relaxed">{w}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 max-w-2xl">
            <div className="overline mb-3">Our Process</div>
            <h2 className="font-heading text-4xl md:text-5xl leading-tight text-[#1a2e20]">
              End-to-end export solutions,<br />
              <span className="italic">built on trust.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0 border-t border-[#eae6df]">
            {PROCESS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.n}
                  className={`p-8 border-b border-r border-[#eae6df] ${
                    i === PROCESS.length - 1 ? "md:border-r-0" : ""
                  } hover:bg-[#f9f8f6] transition-colors duration-300`}
                >
                  <Icon className="w-8 h-8 text-[#c59c34] mb-4" />
                  <div className="overline text-[11px] mb-3">{step.n}</div>
                  <h4 className="font-heading text-xl text-[#1a2e20] leading-tight">
                    {step.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="py-20 bg-[#c59c34] text-[#1a2e20]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="overline text-[#1a2e20]/70 mb-2">Ready to Import</div>
            <h3 className="font-heading text-3xl md:text-4xl leading-tight">
              Let's start your next shipment together.
            </h3>
          </div>
          <Link to="/contact" data-testid="cta-strip-contact" className="btn-outline !border-[#1a2e20] !text-[#1a2e20] hover:!bg-[#1a2e20] hover:!text-white">
            Get In Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
