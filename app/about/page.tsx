import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Meghan Boston | Artist & Naturalist',
  description: 'Learn about Meghan Boston, a fiber artist and naturalist from Colorado who creates size-inclusive clothing, nature-preserved jewelry, and sacred taxidermy art. Seeing life in all things.',
  openGraph: {
    title: 'About Meghan Boston | Artist & Naturalist',
    description: 'Fiber artist and naturalist creating nature-inspired art in Colorado. From crochet to taxidermy, honoring the circle of life.',
    type: 'profile',
    url: 'https://meghansmomentum.com/about',
    images: [
      {
        url: 'https://meghansmomentum.com/images/meghan-boston.jpg',
        width: 1200,
        height: 630,
        alt: 'Meghan Boston - Artist & Naturalist'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Meghan Boston | Artist & Naturalist',
    description: 'Fiber artist and naturalist creating nature-inspired art in Colorado.',
    images: ['https://meghansmomentum.com/images/meghan-boston.jpg']
  }
};

export default function About() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[60vh] bg-neutral-50">
        <div className="grid md:grid-cols-2 gap-0 min-h-[60vh]">
          {/* Image Column */}
          <div className="relative h-[40vh] md:h-auto">
            <Image
              src="/images/meghan-boston.jpg"
              alt="Meghan Boston, Artist"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text Column */}
          <div className="flex items-center justify-center bg-neutral-900 text-white p-8 md:p-12">
            <div className="text-center md:text-left">
              <h2 className="font-display text-4xl md:text-5xl mb-4 tracking-wide animate-fade-in">
                Meghan Boston
              </h2>
              <p className="text-xl md:text-2xl font-light text-neutral-300 animate-fade-in-delay-1">
                Artist & Naturalist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Biography */}
      <article className="max-w-4xl mx-auto px-6 md:px-8 py-20">
        <div className="prose prose-lg prose-neutral max-w-none">
          {/* Main Heading */}
          <header className="mb-16 text-center">
            <h1 className="font-serif text-5xl md:text-6xl leading-relaxed text-neutral-900 mb-8">
              Seeing Life in All Things
            </h1>
          </header>

          {/* Opening */}
          <section className="mb-12 animate-fade-in">
            <p className="text-lg leading-relaxed text-neutral-700 mb-6">
              Meghan started from a young age seeing life in all things. Growing up on the edge of a desert in Del Rio, Texas, they witnessed firsthand the delicate relationship humans have with nature—a connection that would later shape their artistic vision.
            </p>
          </section>

          {/* The Path to Fiber Arts */}
          <section className="mb-12 animate-fade-in-delay-1">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-6">The Path to Fiber Arts</h2>

            <p className="text-lg leading-relaxed text-neutral-700 mb-6">
              A lifelong artist, Meghan picked up crochet at the age of 20. It was a new skill, meditative in its rhythm, using yarn as a living medium. They began creating size-inclusive clothing as an expression of slow fashion—pushing back against the waste we create through fast fashion.
            </p>

            <p className="text-lg leading-relaxed text-neutral-700">
              Being a devoted rockhound, Meghan scours Colorado's landscapes for semi-precious stones, lovingly incorporating them into their art and infusing each piece with a touch of Colorado's natural light.
            </p>
          </section>

          {/* Nature Preserved */}
          <section className="mb-12 animate-fade-in-delay-2">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-6">Nature Preserved</h2>

            <p className="text-lg leading-relaxed text-neutral-700 mb-6">
              In 2018, Meghan embarked on crafting miniature bottle jewelry. Over time, they refined their process, discovering the ideal elements to infuse into each piece. Early inspirations included scrolls, delicate leaves, and petite blossoms.
            </p>

            <p className="text-lg leading-relaxed text-neutral-700">
              The natural beauty of Colorado became Meghan's muse. With every hiking expedition, their pockets filled with vibrant flowers, lush moss, and other small curiosities—treasures later transformed into art.
            </p>
          </section>

          {/* Honoring the Circle of Life */}
          <section className="mb-12 animate-fade-in-delay-3">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-6">Honoring the Circle of Life</h2>

            <p className="text-lg leading-relaxed text-neutral-700 mb-6">
              The inspiration deepened as Meghan noticed the number of deer, elk, coyotes, and foxes along the highways—casualties of human expansion. They also witnessed the bodies of mice, chipmunks, and packrats removed from people's homes. From this awareness emerged a new purpose: to immortalize these small creatures in resin jewelry, inviting reflection on our relationship with the natural world.
            </p>

            <p className="text-lg leading-relaxed text-neutral-700 mb-6">
              Seeing beauty in death after life, Meghan began preserving creatures after the circle of life had completed itself. Bringing artistry to something often considered taboo became a stepping stone into their newest body of work.
            </p>

            <blockquote className="border-l-4 border-amber-600 pl-6 my-8 italic text-neutral-700 text-lg">
              "What better way to be memorialized than to be turned into art?"
            </blockquote>
          </section>

          {/* Sacred Process */}
          <section className="mb-12 animate-fade-in-delay-4">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-6">Sacred Process</h2>

            <p className="text-lg leading-relaxed text-neutral-700 mb-6">
              Meghan began painting skulls to be adored even after death—a practice rooted in reverence and awareness.
            </p>

            <blockquote className="border-l-4 border-neutral-900 pl-6 my-8 italic text-neutral-700 text-lg">
              "I want people to recognize the destruction of their ways. Respect wildlife, and be aware that this was their home first in these mountains."
            </blockquote>

            <p className="text-lg leading-relaxed text-neutral-700 mb-6">
              Meghan started picking up roadkill to care for those who had passed.
            </p>

            <blockquote className="border-l-4 border-neutral-900 pl-6 my-8 italic text-neutral-700 text-lg">
              "It's really a statement—to do the whole process, fur to bone. It's similar to how the Egyptians would reverently process their dead, from humans to animals. To artfully preserve the body to help the soul pass to the next world."
            </blockquote>
          </section>

          {/* Kinder Than Man - Poem */}
          <section className="mb-16 bg-neutral-100 p-8 md:p-12 rounded animate-fade-in-delay-5">
            <h2 className="font-serif text-3xl md:text-4xl text-neutral-900 mb-6">Kinder Than Man</h2>

            <p className="text-neutral-600 mb-6 text-sm uppercase tracking-wider">
              A poem by Althea Davis, which encompasses the passion behind Meghan's work:
            </p>

            <blockquote className="font-serif text-lg leading-loose text-neutral-700 space-y-4 border-none pl-0">
              <p>
                And God, please let the deer on the highway get some kind of heaven,<br />
                Something with tall soft grass and sweet reunion.
              </p>
              <p>
                Let the moths in porch lights go some place with a thousand suns,<br />
                That taste like sugar and get swallowed whole.
              </p>
              <p>
                May the mice in oil and glue have forever dry, warm fur and full bellies.
              </p>
              <p className="font-bold mt-6">
                If I am killed for simply living,<br />
                Let death be kinder than man.
              </p>
            </blockquote>
          </section>

          {/* Closing Statement */}
          <section className="text-center mb-12 animate-fade-in-delay-6">
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-neutral-800 mb-8">
              Take a moment to observe closely—each piece Meghan creates is a harmonious blend of found treasures, resulting in a truly intentional work of art.
            </p>
            <p className="text-lg text-neutral-600">
              Best<br />
              <span className="font-serif text-2xl">Meghan Boston</span>
            </p>
          </section>
        </div>
      </article>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center bg-white">
        <h2 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-6">
          Explore the Collections
        </h2>
        <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
          Each piece tells a story of Colorado's wilderness, honoring the delicate balance between humanity and nature.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/shop"
            className="px-10 py-3 border border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300 text-lg"
          >
            View Available Works
          </a>
          <a
            href="/commissions"
            className="px-10 py-3 bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-300 text-lg"
          >
            Commission a Piece
          </a>
        </div>
      </section>
    </main>
  );
}
