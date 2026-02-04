'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavLink {
    href: string;
    label: string;
}

interface MobileMenuProps {
    links: NavLink[];
}

export default function MobileMenu({ links }: MobileMenuProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            {/* Mobile Hamburger Button */}
            <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-neutral-900 hover:text-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 rounded"
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {mobileMenuOpen ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50"
                    onClick={closeMobileMenu}
                    aria-hidden="true"
                />

                {/* Drawer */}
                <nav
                    className={`absolute top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex flex-col h-full">
                        {/* Close button */}
                        <div className="flex justify-end p-4 border-b border-neutral-200">
                            <button
                                onClick={closeMobileMenu}
                                className="p-2 text-neutral-900 hover:text-amber-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 rounded"
                                aria-label="Close menu"
                            >
                                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Menu Links */}
                        <div className="flex-1 overflow-y-auto py-6">
                            <div className="flex flex-col space-y-1 px-4">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={closeMobileMenu}
                                        className="py-3 px-4 text-lg text-neutral-900 hover:bg-amber-50 hover:text-amber-700 rounded transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
