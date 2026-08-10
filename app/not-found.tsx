import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-elan-dark text-elan-cream flex flex-col items-center justify-center p-6 text-center">
      <span className="text-xs font-sans tracking-[0.4em] uppercase text-elan-gold mb-3">
        404 — PAGE NOT FOUND
      </span>
      <h1 className="font-serif text-5xl sm:text-7xl font-medium mb-4">
        Out of Reach
      </h1>
      <p className="font-sans text-sm text-elan-cream/70 max-w-md font-light mb-8">
        The cold-pressed vintage page you are seeking does not exist. Return to the main ÉLAN experience.
      </p>
      <Link
        href="/"
        className="px-8 py-4 rounded-full bg-elan-gold text-elan-dark font-serif text-xs tracking-[0.25em] uppercase font-semibold hover:bg-elan-goldLight transition-colors"
      >
        RETURN TO EXPERIENCE
      </Link>
    </div>
  );
}
