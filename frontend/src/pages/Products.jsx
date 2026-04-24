import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  CATEGORIES,
  PRODUCTS,
  getCategoryBySlug,
  getProductsByCategory,
} from "../data/products";

function ProductCard({ product }) {
  const category = CATEGORIES.find((c) => c.slug === product.category);
  return (
    <Link
      to={`/product/${product.slug}`}
      data-testid={`product-card-${product.slug}`}
      className="group bg-white border border-[#eae6df] hover:border-[#1a2e20] transition-all duration-300 flex flex-col"
    >
      <div className="aspect-[4/3] overflow-hidden bg-[#f9f8f6]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="overline text-[10px] mb-3">{category?.name}</div>
        <h4 className="font-heading text-2xl text-[#1a2e20] leading-tight mb-auto">
          {product.name}
        </h4>
        <div className="mt-4 inline-flex items-center gap-2 text-xs tracking-widest uppercase font-bold text-[#c59c34] group-hover:gap-3 transition-all">
          View Details <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}

export default function Products() {
  const { categorySlug } = useParams();

  // If category slug provided but invalid, redirect to all products
  if (categorySlug && !getCategoryBySlug(categorySlug)) {
    return <Navigate to="/products" replace />;
  }

  const activeCategory = categorySlug ? getCategoryBySlug(categorySlug) : null;
  const heading = activeCategory ? activeCategory.name : "All Products";
  const tagline = activeCategory
    ? activeCategory.tagline
    : "Explore our full catalog of spices, oil seeds, beans and animal feed — sourced from verified Indian farms.";

  return (
    <main data-testid="products-page" className="bg-[#f9f8f6] min-h-screen">
      {/* HERO / HEADER */}
      <section className="pt-36 pb-16 bg-[#1a2e20] text-white relative overflow-hidden">
        <div className="absolute inset-0 grain opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="overline text-[#c59c34] mb-5">Product Catalog</div>
          <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            {activeCategory ? (
              <>
                {heading}
                <span className="italic text-[#c59c34]">.</span>
              </>
            ) : (
              <>
                Every grain.<br />
                <span className="italic text-[#c59c34]">Every seed. Every spice.</span>
              </>
            )}
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">{tagline}</p>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section className="sticky top-20 z-30 bg-[#f9f8f6]/95 backdrop-blur border-b border-[#eae6df]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center gap-2 overflow-x-auto py-4">
          <Link
            to="/products"
            data-testid="tab-all"
            className={`flex-shrink-0 px-5 py-2.5 text-xs tracking-widest uppercase font-bold border transition-all duration-300 ${
              !categorySlug
                ? "bg-[#1a2e20] text-white border-[#1a2e20]"
                : "bg-white text-[#1a2e20] border-[#eae6df] hover:border-[#1a2e20]"
            }`}
          >
            All ({PRODUCTS.length})
          </Link>
          {CATEGORIES.map((c) => {
            const count = getProductsByCategory(c.slug).length;
            const active = categorySlug === c.slug;
            return (
              <Link
                key={c.slug}
                to={`/products/${c.slug}`}
                data-testid={`tab-${c.slug}`}
                className={`flex-shrink-0 px-5 py-2.5 text-xs tracking-widest uppercase font-bold border transition-all duration-300 ${
                  active
                    ? "bg-[#1a2e20] text-white border-[#1a2e20]"
                    : "bg-white text-[#1a2e20] border-[#eae6df] hover:border-[#1a2e20]"
                }`}
              >
                {c.name} ({count})
              </Link>
            );
          })}
        </div>
      </section>

      {/* PRODUCT GRIDS */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {activeCategory ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getProductsByCategory(activeCategory.slug).map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          ) : (
            <div className="space-y-20">
              {CATEGORIES.map((cat) => (
                <div key={cat.slug} data-testid={`category-section-${cat.slug}`}>
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 border-b border-[#eae6df] pb-6">
                    <div>
                      <div className="overline mb-2">Category</div>
                      <h2 className="font-heading text-3xl md:text-4xl text-[#1a2e20]">
                        {cat.name}
                      </h2>
                      <p className="text-sm text-[#5c6a61] mt-2 max-w-xl">
                        {cat.tagline}
                      </p>
                    </div>
                    <Link
                      to={`/products/${cat.slug}`}
                      className="btn-outline self-start"
                      data-testid={`view-category-${cat.slug}`}
                    >
                      View {cat.name} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {getProductsByCategory(cat.slug).map((p) => (
                      <ProductCard key={p.slug} product={p} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
