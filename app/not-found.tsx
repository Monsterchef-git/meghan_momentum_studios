import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '404 - Page Not Found | Meghan\'s Momentum',
    description: 'The page you are looking for could not be found.',
    robots: {
        index: false,
        follow: false
    }
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center overflow-hidden flower-pattern">
            {/* Floating decorative elements */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-sunset-400/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-plum-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-terracotta-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10 text-center px-6 max-w-3xl">
                {/* Decorative mandala */}
                <div className="mb-8 flex justify-center">
                    <div className="w-24 h-24 border-4 border-terracotta-400 rounded-full animate-spin-slow opacity-60"></div>
                </div>

                {/* 404 Number */}
                <h1 className="font-display text-9xl md:text-[12rem] mb-6 text-gradient-sunset">
                    404
                </h1>

                {/* Message */}
                <h2 className="font-display text-4xl md:text-5xl mb-6 text-terracotta-800">
                    Lost in the Wilderness
                </h2>

                <p className="text-xl md:text-2xl font-serif text-sage-700 mb-4 italic">
                    This path doesn't exist in our garden
                </p>

                <p className="text-lg text-sage-600 max-w-xl mx-auto mb-12 leading-relaxed">
                    Like a wildflower that hasn't bloomed yet, this page can't be found.
                    Let's guide you back to familiar trails.
                </p>

                {/* Decorative divider */}
                <div className="w-32 h-1 bg-gradient-sunset mx-auto mb-12 rounded-full"></div>

                {/* Navigation buttons */}
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <Link href="/" className="btn-hippie">
                        Return Home 🌻
                    </Link>
                    <Link href="/shop" className="btn-outline-hippie">
                        Explore the Gallery
                    </Link>
                </div>

                {/* Additional decorative element */}
                <div className="mt-16 flex justify-center gap-4">
                    <div className="w-3 h-3 bg-sunset-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-terracotta-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-plum-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>
        </div>
    );
}
