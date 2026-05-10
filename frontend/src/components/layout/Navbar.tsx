import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm uppercase tracking-[0.2em]">
        <Link href="/" className="font-semibold tracking-[0.3em]">
          Traveloop
        </Link>
        <div className="hidden gap-6 md:flex">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/trips">Trips</Link>
          <Link href="/community">Community</Link>
        </div>
      </nav>
    </header>
  );
}
