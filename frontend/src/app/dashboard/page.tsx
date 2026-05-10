'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Plus, Map, PackageCheck, NotebookPen, ArrowRight } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const recentTrips = [
  {
    id: '1',
    name: 'The Rome Chronicles',
    destination: 'Rome, Italy',
    dates: '12–19 Oct',
    status: 'ongoing',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800'
  },
  {
    id: '2',
    name: 'Parisian Winter',
    destination: 'Paris, France',
    dates: 'Nov 22–28',
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800'
  },
  {
    id: '3',
    name: 'Nordic Serenity',
    destination: 'Reykjavík, Iceland',
    dates: 'Dec 5–10',
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1513635269975-59693e0cd100?w=800'
  }
];

const destinations = [
  {
    city: 'Kyoto',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800'
  },
  {
    city: 'Santorini',
    country: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800'
  },
  {
    city: 'New York',
    country: 'USA',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800'
  },
  {
    city: 'Marrakech',
    country: 'Morocco',
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800'
  }
];

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'ongoing':
      return 'bg-green-100 text-green-800';
    case 'upcoming':
      return 'bg-blue-100 text-blue-800';
    case 'completed':
      return 'bg-gray-100 text-gray-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric'
});

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const displayName = user ? user.full_name.split(' ')[0] : 'Traveler';

  return (
    <main className="w-full px-4 md:px-12 py-12 bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto w-full max-w-7xl">
        {/* Welcome Banner */}
        <div className="mb-12 pb-6 border-b border-[var(--border)]">
          <h1 className="font-serif text-4xl md:text-5xl mb-2">
            {loading ? (
              <span className="inline-block w-64 h-12 bg-gray-200 animate-pulse"></span>
            ) : (
              <>Welcome back, {displayName}</>
            )}
          </h1>
          <p className="font-sans text-xs uppercase tracking-widest text-[var(--muted)]">
            {today}
          </p>
        </div>

        {/* Budget Highlights Strip */}
        <div className="mb-12 grid grid-cols-3 border-b border-t border-[var(--border)]">
          <div className="py-6 px-4 border-r border-[var(--border)]">
            <p className="font-sans text-xs uppercase tracking-widest text-[var(--muted)] mb-2">
              Total Spent
            </p>
            <p className="font-serif text-3xl md:text-4xl">$3,240</p>
          </div>
          <div className="py-6 px-4 border-r border-[var(--border)]">
            <p className="font-sans text-xs uppercase tracking-widest text-[var(--muted)] mb-2">
              Remaining Budget
            </p>
            <p className="font-serif text-3xl md:text-4xl">$1,160</p>
          </div>
          <div className="py-6 px-4">
            <p className="font-sans text-xs uppercase tracking-widest text-[var(--muted)] mb-2">
              Trips This Year
            </p>
            <p className="font-serif text-3xl md:text-4xl">4</p>
          </div>
        </div>

        {/* Plan New Trip CTA */}
        <div className="mb-12 py-8 flex justify-center">
          <Link
            href="/trips/new"
            className="flex items-center gap-3 px-8 py-3 bg-black text-white border border-black hover:bg-[var(--accent)] hover:border-[var(--accent)] transition duration-200 font-sans font-semibold tracking-wide"
          >
            <Plus size={20} />
            Plan New Trip
          </Link>
        </div>

        {/* Recent Trips */}
        <div className="mb-12">
          <div className="flex items-end justify-between mb-8 pb-4 border-b border-[var(--border)]">
            <h2 className="font-serif text-3xl">Recent Trips</h2>
            <Link
              href="/trips"
              className="font-sans text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--foreground)] transition"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentTrips.map((trip) => (
              <Link key={trip.id} href={`/trips/${trip.id}`}>
                <div className="group cursor-pointer">
                  <div className="relative h-64 overflow-hidden mb-4 bg-[var(--card-bg)]">
                    <Image
                      src={trip.image}
                      alt={trip.name}
                      fill
                      className="object-cover filter grayscale group-hover:grayscale-0 transition duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-xl mb-2">{trip.name}</h3>
                  <p className="font-sans text-xs uppercase tracking-widest text-[var(--muted)] mb-3">
                    {trip.destination} • {trip.dates}
                  </p>
                  <span
                    className={`font-sans text-xs uppercase tracking-widest px-3 py-1 rounded inline-block ${getStatusBadgeColor(
                      trip.status
                    )}`}
                  >
                    {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recommended Destinations */}
        <div className="mb-12">
          <div className="mb-8 pb-4 border-b border-[var(--border)]">
            <h2 className="font-serif text-3xl">Recommended Destinations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <div
                key={dest.city}
                className="group relative h-64 overflow-hidden cursor-pointer"
              >
                <Image
                  src={dest.image}
                  alt={dest.city}
                  fill
                  className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-200" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="font-serif text-2xl mb-1">{dest.city}</h3>
                  <p className="font-sans text-xs uppercase tracking-widest text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition">
                    {dest.country}
                  </p>
                  <div className="flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition font-sans font-semibold">
                    Explore <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/trips">
            <div className="group p-6 border border-[var(--border)] hover:-translate-y-1 hover:shadow-md transition duration-200 cursor-pointer bg-[var(--card-bg)]">
              <Map size={32} className="mb-4 text-[var(--accent)]" />
              <h3 className="font-serif text-lg font-bold mb-2">My Trips</h3>
              <p className="font-sans text-sm text-[var(--muted)]">
                View and manage all your travel plans
              </p>
            </div>
          </Link>

          <Link href="/checklist">
            <div className="group p-6 border border-[var(--border)] hover:-translate-y-1 hover:shadow-md transition duration-200 cursor-pointer bg-[var(--card-bg)]">
              <PackageCheck size={32} className="mb-4 text-[var(--accent)]" />
              <h3 className="font-serif text-lg font-bold mb-2">Packing Checklist</h3>
              <p className="font-sans text-sm text-[var(--muted)]">
                Prepare for your journey
              </p>
            </div>
          </Link>

          <Link href="/notes">
            <div className="group p-6 border border-[var(--border)] hover:-translate-y-1 hover:shadow-md transition duration-200 cursor-pointer bg-[var(--card-bg)]">
              <NotebookPen size={32} className="mb-4 text-[var(--accent)]" />
              <h3 className="font-serif text-lg font-bold mb-2">Trip Notes</h3>
              <p className="font-sans text-sm text-[var(--muted)]">
                Record your travel memories
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
