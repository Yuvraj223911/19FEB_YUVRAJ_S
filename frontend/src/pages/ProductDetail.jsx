import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, MessageCircle, Phone, Mail } from "lucide-react";
import {
  CATEGORIES,
  COMPANY,
  getCategoryBySlug,
  getProductBySlug,
  getProductsByCategory,
} from "../data/products";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) return <Navigate to="/products" replace />;

  const category = getCategoryBySlug(product.category);
  const siblings = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  const whatsappHref = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    `Hello ROCK AGRI, I'm interested in ${product.name}. Please share details & pricing.`
  )}`;

  return (
    <main data-testid={`product-detail-${slug}`} className="bg-[#f9f8f6] min-h-screen">
      {/* HEADER with breadcrumb */}
      <div className="pt-28 pb-6 bg-[#f9f8f6] border-b border-[#eae6df]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center gap-2 text-xs tracking-wider uppercase">
          <Link to="/" className="text-[#5c6a61] hover:text-[#1a2e20]">Home</Link>
          <span className="text-[#5c6a61]">/</span>
          <Link to="/products" className="text-[#5c6a61] hover:text-[#1a2e20]">Products</Link>
          <span className="text-[#5c6a61]">/</span>
          <Link to={`/products/${category.slug}`} className="text-[#5c6a61] hover:text-[#1a2e20]">
            {category.name}
          </Link>
          <span className="text-[#5c6a61]">/</span>
          <span className="text-[#1a2e20] font-semibold">{product.name}</span>
        </div>
      </div>

      {/* MAIN */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="aspect-square overflow-hidden bg-white border border-[#eae6df] sticky top-32">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <Link
                to={`/products/${category.slug}`}
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-[#1a2e20] hover:text-[#c59c34]"
                data-testid="back-to-category"
              >
                <ArrowLeft className="w-4 h-4" /> Back to {category.name}
              </Link>
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-7">
            <div className="overline mb-4">{category.name}</div>
            <h1 className="font-heading text-4xl md:text-6xl text-[#1a2e20] leading-[1.05] mb-6">
              {product.name}
            </h1>
            <p className="text-base md:text-lg text-[#2c4c3b] leading-relaxed whitespace-pre-line">
              {product.description}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="product-whatsapp-btn"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#25d366] hover:bg-[#1fb858] text-white uppercase tracking-widest text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
              </a>
              <Link to="/contact" data-testid="product-quote-btn" className="btn-outline">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Specs table */}
            <div className="mt-16">
              <div className="overline mb-6">Specifications</div>
              <table className="w-full text-left border-t-2 border-[#1a2e20]">
                <thead>
                  <tr className="border-b-2 border-[#1a2e20]">
                    <th className="py-4 pr-4 font-heading text-lg font-semibold text-[#1a2e20]">
                      Parameter
                    </th>
                    <th className="py-4 font-heading text-lg font-semibold text-[#1a2e20]">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map(([k, v], i) => (
                    <tr
                      key={k + i}
                      className="border-b border-[#eae6df] hover:bg-white transition-colors"
                    >
                      <td className="py-4 pr-4 text-sm font-semibold text-[#1a2e20] align-top w-1/2 md:w-2/5">
                        {k}
                      </td>
                      <td className="py-4 text-sm text-[#2c4c3b] align-top">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* About */}
            {product.about && (
              <div className="mt-16 p-8 md:p-10 bg-white border border-[#eae6df]">
                <div className="overline mb-4">Applications &amp; Usage</div>
                <h3 className="font-heading text-2xl md:text-3xl text-[#1a2e20] mb-4">
                  About {product.name}
                </h3>
                <p className="text-base text-[#5c6a61] leading-relaxed">
                  {product.about}
                </p>
              </div>
            )}

            {/* Quick contact */}
            <div className="mt-12 pt-10 border-t border-[#eae6df] grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <a
                href={`tel:${COMPANY.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-[#1a2e20] hover:text-[#c59c34]"
                data-testid="product-call-link"
              >
                <Phone className="w-4 h-4 text-[#c59c34]" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-[#1a2e20] hover:text-[#c59c34]"
                data-testid="product-email-link"
              >
                <Mail className="w-4 h-4 text-[#c59c34]" />
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {siblings.length > 0 && (
        <section className="py-20 bg-white border-t border-[#eae6df]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="overline mb-2">More from</div>
                <h3 className="font-heading text-3xl md:text-4xl text-[#1a2e20]">
                  {category.name}
                </h3>
              </div>
              <Link
                to={`/products/${category.slug}`}
                className="btn-outline hidden md:inline-flex"
                data-testid="see-all-in-category"
              >
                See all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {siblings.map((p) => (
                <Link
                  key={p.slug}
                  to={`/product/${p.slug}`}
                  data-testid={`related-${p.slug}`}
                  className="group border border-[#eae6df] hover:border-[#1a2e20] transition-all duration-300 bg-[#f9f8f6]"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-heading text-lg text-[#1a2e20]">{p.name}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
