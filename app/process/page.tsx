import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Artistic Process | Meghan\'s Momentum',
  description: 'Discover the sacred process behind fiber arts, nature-preserved jewelry, and taxidermy art',
};

export default function Process() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-sage-100 via-neutral-50 to-terracotta-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="font-display text-5xl md:text-6xl text-neutral-900 mb-6">
            The Sacred Process
          </h1>
          <p className="text-xl text-neutral-700 leading-relaxed max-w-2xl mx-auto">
            Each piece begins with reverence—honoring the materials, the creatures,
            and the delicate relationship between humans and the natural world.
          </p>
        </div>
      </section>

      {/* Fiber Arts Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-terracotta-600 font-semibold uppercase tracking-wider text-sm">
                Fiber Arts
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-neutral-900 mt-4 mb-6">
                Slow Fashion, Mindful Creation
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                At age 20, I picked up crochet—a meditative practice that uses yarn as a living medium.
                Each stitch is intentional, each piece created with care.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                I create size-inclusive clothing as an expression of slow fashion, pushing back against
                the waste we create through fast fashion. Every garment is a statement of sustainability
                and self-love.
              </p>
            </div>
            <div className="aspect-square rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/images/process_fiber_arts.jpg"
                alt="Fiber arts creation process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Fiber Arts Steps */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-sage-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-sage-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-serif text-2xl text-neutral-900 mb-3">Material Selection</h3>
              <p className="text-neutral-700">
                Choosing sustainable, high-quality yarns that feel good to work with and wear.
              </p>
            </div>
            <div className="bg-sage-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-sage-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-serif text-2xl text-neutral-900 mb-3">Meditative Rhythm</h3>
              <p className="text-neutral-700">
                Each stitch is a meditation, creating a rhythm that flows through the entire piece.
              </p>
            </div>
            <div className="bg-sage-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-sage-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-serif text-2xl text-neutral-900 mb-3">Size-Inclusive Design</h3>
              <p className="text-neutral-700">
                Creating wearable art that celebrates all bodies and promotes self-expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nature-Preserved Jewelry Process */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-neutral-50 to-plum-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 aspect-square rounded-2xl shadow-lg overflow-hidden">
              <img
                src="/images/process_jewelry.jpg"
                alt="Nature-preserved jewelry creation process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-amber-700 font-semibold uppercase tracking-wider text-sm">
                Nature-Preserved Jewelry
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-neutral-900 mt-4 mb-6">
                Colorado's Treasures, Forever Preserved
              </h2>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Since 2018, I've been crafting miniature bottle jewelry—tiny worlds that capture
                the essence of Colorado's natural beauty.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                As a devoted rockhound, I scour Colorado's landscapes for semi-precious stones,
                vibrant wildflowers, lush moss, and other small curiosities. Each hiking expedition
                fills my pockets with treasures that will be transformed into wearable art.
              </p>
            </div>
          </div>

          {/* Jewelry Steps */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
                1
              </div>
              <h3 className="font-serif text-xl text-neutral-900 mb-2">Foraging</h3>
              <p className="text-neutral-600 text-sm">
                Hiking Colorado's trails, collecting wildflowers, moss, and stones
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
                2
              </div>
              <h3 className="font-serif text-xl text-neutral-900 mb-2">Preservation</h3>
              <p className="text-neutral-600 text-sm">
                Carefully drying and preparing natural elements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
                3
              </div>
              <h3 className="font-serif text-xl text-neutral-900 mb-2">Composition</h3>
              <p className="text-neutral-600 text-sm">
                Arranging elements within miniature bottles with intention
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
                4
              </div>
              <h3 className="font-serif text-xl text-neutral-900 mb-2">Infusion</h3>
              <p className="text-neutral-600 text-sm">
                Sealing with resin, capturing Colorado's natural light forever
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Taxidermy Art Process */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-terracotta-400 font-semibold uppercase tracking-wider text-sm">
              Sacred Taxidermy
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
              Honoring the Circle of Life
            </h2>
            <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto">
              This work emerged from witnessing the casualties of human expansion—deer, elk, coyotes,
              and foxes along highways, small creatures removed from homes. Each piece invites reflection
              on our relationship with the natural world.
            </p>
          </div>

          {/* Quote */}
          <blockquote className="border-l-4 border-amber-600 pl-8 my-12 max-w-3xl mx-auto">
            <p className="text-2xl font-serif italic text-neutral-200 mb-4">
              "What better way to be memorialized than to be turned into art?"
            </p>
            <p className="text-lg text-neutral-400">
              I want people to recognize the destruction of their ways. Respect wildlife,
              and be aware that this was their home first in these mountains.
            </p>
          </blockquote>

          {/* Taxidermy Process */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700">
              <h3 className="font-serif text-2xl mb-4 text-amber-400">The Sacred Process</h3>
              <p className="text-neutral-300 leading-relaxed mb-4">
                It's really a statement—to do the whole process, fur to bone. Similar to how the
                Egyptians would reverently process their dead, from humans to animals.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                To artfully preserve the body to help the soul pass to the next world.
              </p>
            </div>
            <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700">
              <h3 className="font-serif text-2xl mb-4 text-amber-400">Skull Painting</h3>
              <p className="text-neutral-300 leading-relaxed mb-4">
                I paint skulls to be adored even after death—a practice rooted in reverence and awareness.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                Each painted skull becomes a memorial, transforming what many consider taboo into
                beautiful, meaningful art.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
                1
              </div>
              <h3 className="font-serif text-xl mb-2">Respectful Collection</h3>
              <p className="text-neutral-400 text-sm">
                Caring for those who have passed, treating each creature with dignity
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
                2
              </div>
              <h3 className="font-serif text-xl mb-2">Preservation</h3>
              <p className="text-neutral-400 text-sm">
                The complete process, fur to bone, done with reverence and intention
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-terracotta-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
                3
              </div>
              <h3 className="font-serif text-xl mb-2">Artistic Transformation</h3>
              <p className="text-neutral-400 text-sm">
                Painting and adorning to create memorials that honor their existence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="font-serif text-2xl text-neutral-800 leading-relaxed mb-8">
            Take a moment to observe closely—each piece I create is a harmonious blend of found treasures,
            resulting in truly intentional works of art.
          </p>
          <p className="text-lg text-neutral-600 mb-12">
            Every creation tells a story of connection, reverence, and the delicate relationship
            between humans and the natural world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="px-10 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 text-lg rounded-full"
            >
              View Available Works
            </a>
            <a
              href="/commissions"
              className="px-10 py-3 border border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 text-lg rounded-full"
            >
              Commission a Piece
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
