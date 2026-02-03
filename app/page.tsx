import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Meghan's Momentum | Nature-Inspired Art from Colorado",
  description: "Discover handcrafted fiber arts, nature-preserved jewelry, and sacred taxidermy art by Meghan Boston. Size-inclusive crochet clothing, Colorado wildflower jewelry, and ethical taxidermy honoring the natural world.",
  keywords: ["fiber arts", "crochet", "nature jewelry", "taxidermy art", "Colorado artist", "ethical taxidermy", "resin jewelry", "sustainable fashion", "handmade jewelry"],
  openGraph: {
    title: "Meghan's Momentum | Nature-Inspired Art from Colorado",
    description: "Handcrafted fiber arts, nature-preserved jewelry, and sacred taxidermy art honoring the delicate relationship between humans and nature.",
    type: "website",
    url: "https://meghansmomentum.com",
    images: [
      {
        url: "https://meghansmomentum.com/images/hero/sunlight_snow.jpg",
        width: 1200,
        height: 630,
        alt: "Meghan's Momentum - Nature-Inspired Art"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Meghan's Momentum | Nature-Inspired Art from Colorado",
    description: "Handcrafted fiber arts, nature-preserved jewelry, and sacred taxidermy art.",
    images: ["https://meghansmomentum.com/images/hero/sunlight_snow.jpg"]
  }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Estilo Hippie */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden flower-pattern">
        {/* Elementos decorativos flotantes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-sunset-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-plum-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          {/* Mandala decorativo */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 border-4 border-terracotta-400 rounded-full animate-spin-slow opacity-60"></div>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 text-gradient-sunset">
            Seeing Life in All Things
          </h1>

          <p className="text-2xl md:text-3xl font-serif text-terracotta-700 mb-4 italic">
            Nature preserved, honored, transformed
          </p>

          <p className="text-lg text-sage-700 max-w-2xl mx-auto mb-12 leading-relaxed">
            From fiber arts to nature-preserved jewelry and sacred taxidermy, each piece honors
            the delicate relationship between humans and the natural world.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="/shop" className="btn-hippie">
              Explore the Gallery ✨
            </a>
            <a href="/commissions" className="btn-outline-hippie">
              Custom Vibes
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Estilo Orgánico */}
      <section className="py-24 px-6 bg-sage-50/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl text-center mb-4 text-gradient-earth">
            Recent Creations
          </h2>
          <p className="text-center text-sage-600 mb-16 text-lg">
            Fiber arts, preserved nature, and sacred art from Colorado's wilderness
          </p>

          {/* Grid asimétrico con hover effects */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Large featured - Texas Sunset Crochet */}
            <div className="card-hippie hover-float md:col-span-2 md:row-span-2">
              <div className="aspect-square bg-gradient-to-br from-sunset-200 via-terracotta-200 to-plum-200 rounded-2xl mb-4 relative overflow-hidden group">
                <img
                  src="/images/crochet/texas_sunset_acrylic.jpg"
                  alt="Texas Sunset - Premium Acrylic Crochet"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-psychedelic opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              <h3 className="font-serif text-xl text-terracotta-800 mb-2">Texas Sunset</h3>
              <p className="text-sage-600 text-sm">100% Acrylic Crochet • $350</p>
            </div>

            {/* Wood Rat Mandible Jewelry */}
            <div className="card-hippie hover-float">
              <div className="aspect-square bg-gradient-to-br from-sunset-200 via-terracotta-200 to-plum-200 rounded-2xl mb-4 relative overflow-hidden group">
                <img
                  src="/images/jewelry/wood_rat_mandible_fern.jpg"
                  alt="Wood Rat Mandible and Fern in Resin"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-psychedelic opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              <h3 className="font-serif text-xl text-terracotta-800 mb-2">Wood Rat & Fern</h3>
              <p className="text-sage-600 text-sm">Resin Jewelry • $54</p>
            </div>

            {/* Sunlight on the Snow Taxidermy */}
            <div className="card-hippie hover-float">
              <div className="aspect-square bg-gradient-to-br from-sunset-200 via-terracotta-200 to-plum-200 rounded-2xl mb-4 relative overflow-hidden group">
                <img
                  src="/images/taxidermy/sunlight_snow_raccoon.jpg"
                  alt="Sunlight on the Snow - Raccoon Skull Art"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-psychedelic opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              <h3 className="font-serif text-xl text-terracotta-800 mb-2">Sunlight on the Snow</h3>
              <p className="text-sage-600 text-sm">Painted Taxidermy • $275</p>
            </div>

            {/* Aspen Garden Butterfly */}
            <div className="card-hippie hover-float md:col-span-2">
              <div className="aspect-square bg-gradient-to-br from-sunset-200 via-terracotta-200 to-plum-200 rounded-2xl mb-4 relative overflow-hidden group">
                <img
                  src="/images/taxidermy/aspen_garden_butterfly.jpg"
                  alt="In The Aspen Garden - Pressed Flowers & Butterfly"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-psychedelic opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              <h3 className="font-serif text-xl text-terracotta-800 mb-2">In The Aspen Garden</h3>
              <p className="text-sage-600 text-sm">Pressed Flowers & Butterfly • $75</p>
            </div>

            {/* Artist Pallet Crochet */}
            <div className="card-hippie hover-float">
              <div className="aspect-square bg-gradient-to-br from-sunset-200 via-terracotta-200 to-plum-200 rounded-2xl mb-4 relative overflow-hidden group">
                <img
                  src="/images/crochet/artist_pallet_acrylic.jpg"
                  alt="Artist Pallet - Colorful Acrylic Crochet"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-psychedelic opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              <h3 className="font-serif text-xl text-terracotta-800 mb-2">Artist Pallet</h3>
              <p className="text-sage-600 text-sm">Fiber Arts • $200</p>
            </div>

            {/* Mouse Jaw Jewelry */}
            <div className="card-hippie hover-float">
              <div className="aspect-square bg-gradient-to-br from-sunset-200 via-terracotta-200 to-plum-200 rounded-2xl mb-4 relative overflow-hidden group">
                <img
                  src="/images/jewelry/mouse_jaw_allium.jpg"
                  alt="Mouse Jaw & Allium Flower in Resin"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-psychedelic opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
              <h3 className="font-serif text-xl text-terracotta-800 mb-2">Mouse Jaw & Allium</h3>
              <p className="text-sage-600 text-sm">Resin Jewelry • $38</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview - Con elementos bohemios */}
      <section className="py-24 px-6 mandala-bg overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-1 bg-gradient-sunset mb-6 rounded-full"></div>
            <h2 className="font-display text-5xl mb-6 text-terracotta-800">
              The Artist Behind the Canvas
            </h2>
            <p className="text-lg text-sage-700 leading-relaxed mb-6">
              I'm Meghan Boston, a fiber artist and naturalist who sees life in all things.
              From crocheting size-inclusive clothing to preserving Colorado's wildflowers in
              miniature bottles, my work honors the beauty found in nature—even in death.
            </p>
            <p className="text-lg text-sage-700 leading-relaxed mb-8">
              Through taxidermy art and skull painting, I invite reflection on our relationship
              with wildlife. Each piece is a statement: respect the natural world, for this was
              their home first.
            </p>
            <a href="/about" className="btn-outline-hippie">
              Learn More About My Journey 🦋
            </a>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full shadow-hippie overflow-hidden">
              <img
                src="/images/about_preview.jpg"
                alt="Meghan's artisan jewelry work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Círculos decorativos */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-sunset-400 rounded-full opacity-40"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 border-4 border-plum-400 rounded-full opacity-40"></div>
          </div>
        </div>
      </section>

      {/* Commissions CTA */}
      <section className="py-24 px-6 bg-gradient-sunset relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 flower-pattern opacity-20"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-display text-6xl text-white mb-6">
            Commission a Sacred Piece
          </h2>
          <p className="text-2xl text-orange-50 mb-12 font-serif italic">
            Honoring nature through intentional art
          </p>
          <p className="text-lg text-orange-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're seeking custom fiber art, nature-preserved jewelry with Colorado
            treasures, or a memorial piece honoring a beloved creature, I create with reverence
            and intention. Each commission tells a unique story of connection to the natural world.
          </p>
          <a href="/commissions" className="inline-block px-10 py-4 bg-white text-sunset-600 rounded-full font-semibold text-lg hover:bg-sage-50 transition-all hover:scale-105 shadow-lg">
            Start Your Custom Journey
          </a>
        </div>
      </section>
    </div>
  );
}
