import Link from 'next/link';
import ThemeToggle from '@/components/shared/ThemeToggle';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-black">
      <nav className="sans flex items-center justify-between uppercase text-[10px] tracking-[0.2em] px-4 md:px-12 py-5 w-full">
        <div className="flex items-center gap-8 md:gap-16">
          <Link href="/" className="font-bold tracking-[0.3em] text-xs hover:text-accent transition">
            Traveloop.
          </Link>
          <div className="hidden md:flex gap-8 text-gray-500">
            <Link href="/dashboard" className="hover:text-accent transition border-b border-transparent hover:border-accent pb-1 text-black">
              Overview
            </Link>
            <Link href="/trips" className="hover:text-accent transition border-b border-transparent hover:border-accent pb-1">
              Itineraries
            </Link>
            <Link href="/search" className="hover:text-accent transition border-b border-transparent hover:border-accent pb-1">
              Destinations
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <ThemeToggle />
          <Link href="/trips/new" className="hover:text-accent transition hidden sm:block">
            Create +
          </Link>
          <div className="w-px h-3 bg-gray-300 hidden sm:block"></div>
          <button className="group flex items-center gap-3">
            <span className="hidden sm:block group-hover:text-accent transition">J. Doe</span>
            <img
              src="https://i.pravatar.cc/150?u=traveloop"
              alt="Profile"
              className="w-7 h-7 rounded-full border border-black grayscale group-hover:grayscale-0 group-hover:border-accent object-cover transition duration-300"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
