import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commissions',
};

export default function Commissions() {
  const tiers = [
    { size: 'Small', price: '$400+', dimensions: '12" × 16" to 18" × 24"' },
    { size: 'Medium', price: '$800+', dimensions: '24" × 36" to 36" × 48"' },
    { size: 'Large', price: '$1,500+', dimensions: '48" × 60" and larger' },
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-serif text-6xl font-light text-neutral-900 mb-6 tracking-tight">
            Commission Your Own Piece
          </h1>
          <p className="font-sans text-neutral-600 text-lg leading-relaxed mb-20">
            Let&apos;s create something meaningful together
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {tiers.map((tier, i) => (
              <div key={i} className="border border-neutral-200 p-8 hover:border-neutral-900 transition-colors duration-300">
                <h3 className="font-serif text-2xl font-light text-neutral-900 mb-2">
                  {tier.size}
                </h3>
                <p className="font-sans text-sm text-neutral-500 mb-4">
                  {tier.dimensions}
                </p>
                <p className="font-serif text-3xl text-neutral-900">
                  {tier.price}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="/contact" 
              className="inline-block px-10 py-3 border border-neutral-900 text-neutral-900 font-sans text-sm uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-all duration-500"
            >
              Start Your Inquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
