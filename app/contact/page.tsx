'use client';

import type { Metadata } from 'next';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      // Create mailto link as fallback (no backend API)
      const subject = encodeURIComponent(`Contact Form: ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'Not provided'}\n\n` +
        `Message:\n${formData.message}`
      );

      const mailtoLink = `mailto:meghanmboston@gmail.com?subject=${subject}&body=${body}`;

      // Open mailto link
      window.location.href = mailtoLink;

      // Show success message
      setStatus('success');

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setStatus('idle');
      }, 2000);

    } catch (error) {
      setStatus('error');
      setErrorMessage('An error occurred. Please try emailing us directly at meghanmboston@gmail.com');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block font-sans text-sm text-neutral-700 mb-2">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none font-sans"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-sans text-sm text-neutral-700 mb-2">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none font-sans"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-sans text-sm text-neutral-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none font-sans"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-sans text-sm text-neutral-700 mb-2">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-neutral-300 focus:border-neutral-900 focus:outline-none font-sans"
              ></textarea>
            </div>

            {/* Status Messages */}
            {status === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded">
                {errorMessage}
              </div>
            )}

            {status === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded">
                Your email client should open shortly. Thank you for reaching out!
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full px-10 py-4 bg-neutral-900 text-white font-sans text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors disabled:bg-neutral-400 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

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
    </>
  );
}
