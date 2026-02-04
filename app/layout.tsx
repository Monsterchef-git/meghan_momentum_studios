import { Playfair_Display, Outfit, Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import OrganizationSchema from "../components/schema/OrganizationSchema";
import MobileMenu from "../components/MobileMenu";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/process', label: 'Process' },
    { href: '/shop', label: 'Shop' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} ${righteous.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f5f5f4" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans bg-stone-50 text-neutral-900">
        <OrganizationSchema />
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
          <div className="relative">
            {/* Pinceladas decorativas de fondo */}
            <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
              <Image
                src="/images/brushstrokes-top.png"
                alt=""
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Contenido del header */}
            <div className="relative max-w-7xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="font-serif text-xl text-neutral-900 hover:text-amber-700 transition-colors">
                  Meghan's Momentum
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                  <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
                  <Link href="/about" className="hover:text-amber-700 transition-colors">About</Link>
                  <Link href="/process" className="hover:text-amber-700 transition-colors">Process</Link>
                  <Link href="/shop" className="hover:text-amber-700 transition-colors">Shop</Link>
                  <Link href="/contact" className="hover:text-amber-700 transition-colors">Contact</Link>
                </nav>

                {/* Mobile Menu */}
                <MobileMenu links={navLinks} />
              </div>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-neutral-800 via-neutral-900 to-stone-900 text-white py-16 mt-32">
          <div className="max-w-4xl mx-auto px-6">
            {/* Main Content - Centered */}
            <div className="text-center mb-12">
              <h3 className="font-display text-3xl mb-4">Meghan's Momentum</h3>
              <p className="text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                Honoring the delicate relationship between humans and the natural world through
                fiber arts, nature-preserved jewelry, and sacred taxidermy.
              </p>
            </div>

            {/* Navigation Links - Centered */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
              <a href="/about" className="text-neutral-300 hover:text-amber-400 transition-colors">My Journey</a>
              <a href="/process" className="text-neutral-300 hover:text-amber-400 transition-colors">The Process</a>
              <a href="/shop" className="text-neutral-300 hover:text-amber-400 transition-colors">Available Works</a>
              <a href="/contact" className="text-neutral-300 hover:text-amber-400 transition-colors">Contact</a>
            </div>

            {/* Social Links - Centered */}
            <div className="flex justify-center gap-6 mb-10">
              <a
                href="https://www.instagram.com/meghansmomentum/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-amber-400 transition-colors flex items-center gap-2"
                aria-label="Follow on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="mailto:meghanmboston@gmail.com"
                className="text-neutral-300 hover:text-amber-400 transition-colors flex items-center gap-2"
                aria-label="Send email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email</span>
              </a>
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-700 mb-8"></div>

            {/* Copyright - Centered */}
            <div className="text-center text-neutral-400 text-sm">
              <p>Seeing life in all things • © {new Date().getFullYear()} Meghan's Momentum</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
