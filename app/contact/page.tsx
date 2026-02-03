import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Contact() {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <h1 className="font-serif text-6xl font-light text-neutral-900 mb-6 tracking-tight">
            Get in Touch
          </h1>
          <p className="font-sans text-neutral-600 text-lg leading-relaxed mb-12">
            I&apos;d love to hear from you
          </p>
          
          <form className="space-y-6">
            <div>
              <label className="block font-sans text-sm text-neutral-700 mb-2">
                Name
              </label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none font-sans"
              />
            </div>
            
            <div>
              <label className="block font-sans text-sm text-neutral-700 mb-2">
                Email
              </label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none font-sans"
              />
            </div>
            
            <div>
              <label className="block font-sans text-sm text-neutral-700 mb-2">
                Phone
              </label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none font-sans"
              />
            </div>
            
            <div>
              <label className="block font-sans text-sm text-neutral-700 mb-2">
                Message
              </label>
              <textarea 
                rows={6}
                className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none font-sans"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full px-10 py-4 bg-neutral-900 text-white font-sans text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors"
            >
              Send Message
            </button>
          </form>
          
          <p className="text-center font-sans text-sm text-neutral-500 mt-8">
            Or email{' '}
            <a 
              href="mailto:hello@meghansmomentumstudios.com" 
              className="text-neutral-900 hover:underline"
            >
              hello@meghansmomentumstudios.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
