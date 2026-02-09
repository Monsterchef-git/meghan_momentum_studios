import type { Metadata } from 'next';
import ContactForm from '../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Meghan Boston | General Inquiries',
  description: 'Get in touch with Meghan Boston for custom art pieces, questions, or just to say hello. Seeing life in all things.',
  openGraph: {
    title: 'Contact Meghan Boston | General Inquiries',
    description: 'Get in touch with Meghan Boston for custom art pieces, questions, or just to say hello.',
    type: 'website',
    url: 'https://meghansmomentum.com/contact',
  },
  twitter: {
    card: 'summary',
    title: 'Contact Meghan Boston | General Inquiries',
    description: 'Get in touch with Meghan Boston for general inquiries.',
  }
};

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-2xl">
        <h1 className="font-serif text-6xl font-light text-neutral-900 mb-6 tracking-tight">
          Get in Touch
        </h1>
        <p className="font-sans text-neutral-600 text-lg leading-relaxed mb-12">
          I&apos;d love to hear from you
        </p>

        <ContactForm />

        <p className="text-center font-sans text-sm text-neutral-500 mt-8">
          Or email{' '}
          <a
            href="mailto:meghanmboston@gmail.com"
            className="text-neutral-900 hover:underline"
          >
            meghanmboston@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
