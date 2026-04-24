import { Target, Compass, Award, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main data-testid="about-page">
      {/* HERO */}
      <section className="relative pt-36 pb-20 bg-[#1a2e20] text-white overflow-hidden">
        <div className="absolute inset-0 grain opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="overline text-[#c59c34] mb-6">About Rock Agri</div>
          <h1 className="font-heading text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Grown in Gujarat.<br />
            <span className="italic text-[#c59c34]">Delivered to the world.</span>
          </h1>
        </div>
      </section>

      {/* MAIN BODY */}
      <section className="py-24 md:py-32 bg-[#f9f8f6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="overline mb-4">Our Story</div>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1a2e20] leading-tight mb-8">
              A leading agro export company from Rajkot, Gujarat.
            </h2>
            <div className="space-y-6 text-lg text-[#2c4c3b] leading-relaxed">
              <p>
                ROCK AGRI is a leading agro export company based in <strong>Rajkot, Gujarat, India</strong>, established in <strong>2010</strong>. We specialize in exporting a wide range of <strong>Spices, Oil Seeds, Beans, and Animal Feed</strong> products to global markets.
              </p>
              <p>
                With strong sourcing networks and strict quality control, we ensure that every product meets international standards. Our focus on quality, consistency, and timely delivery has helped us build long-term relationships with clients across the <strong>Middle East, Africa, Asia, and Europe</strong>.
              </p>
              <p>
                We are committed to providing reliable supply solutions and competitive pricing, making us a preferred partner in the global agro trade industry.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-[#eae6df] sticky top-32">
              <img
                src="/images/brand/about.avif"
                alt="Rock Agri — Agricultural sourcing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#eae6df]">
            <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-[#eae6df]" data-testid="mission-block">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-7 h-7 text-[#c59c34]" />
                <div className="overline">Our Mission</div>
              </div>
              <h3 className="font-heading text-3xl md:text-4xl text-[#1a2e20] leading-tight mb-6">
                Delivering premium agro commodities with consistency &amp; care.
              </h3>
              <p className="text-base text-[#5c6a61] leading-relaxed">
                To deliver high-quality Spices, Oil Seeds, Beans, and Animal
                Feed products to global markets with consistency, competitive
                pricing, and reliable service, while building long-term
                relationships based on trust and transparency.
              </p>
            </div>
            <div className="p-10 md:p-14 bg-[#1a2e20] text-white" data-testid="vision-block">
              <div className="flex items-center gap-3 mb-6">
                <Compass className="w-7 h-7 text-[#c59c34]" />
                <div className="overline text-[#c59c34]">Our Vision</div>
              </div>
              <h3 className="font-heading text-3xl md:text-4xl leading-tight mb-6">
                <span className="italic text-[#c59c34]">Globally recognized</span>, uncompromising on quality.
              </h3>
              <p className="text-base text-white/80 leading-relaxed">
                To become a globally recognized leader in agro exports by
                providing premium products, expanding into new international
                markets, and maintaining excellence in quality and customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES STRIP */}
      <section className="py-20 bg-[#f9f8f6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-6 bg-white border border-[#eae6df]">
            <Award className="w-8 h-8 text-[#c59c34] flex-shrink-0" />
            <div>
              <div className="font-heading text-xl text-[#1a2e20]">Quality First</div>
              <p className="text-sm text-[#5c6a61] mt-1">Strict inspection at every stage.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-white border border-[#eae6df]">
            <Globe2 className="w-8 h-8 text-[#c59c34] flex-shrink-0" />
            <div>
              <div className="font-heading text-xl text-[#1a2e20]">Global Reach</div>
              <p className="text-sm text-[#5c6a61] mt-1">Clients across 4 continents.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-white border border-[#eae6df]">
            <Target className="w-8 h-8 text-[#c59c34] flex-shrink-0" />
            <div>
              <div className="font-heading text-xl text-[#1a2e20]">On-Time Delivery</div>
              <p className="text-sm text-[#5c6a61] mt-1">Container loads, shipped on schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a2e20] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-heading text-4xl md:text-5xl mb-6">
            Partner with a trusted Indian exporter.
          </h3>
          <Link to="/contact" className="btn-primary" data-testid="about-cta-contact">
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
