"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function EditTripPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: 'The Rome Chronicles',
    start_date: '2026-10-12',
    end_date: '2026-10-19',
    description: 'A week exploring the ancient ruins, eating amazing pasta, and visiting the Vatican.',
  });
  const [coverPhoto, setCoverPhoto] = useState<File | null>(null);

  // In a real app, you would fetch the trip data using params.id here

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCoverPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Updating trip ${params.id}:`, formData, 'Cover photo:', coverPhoto);
    // TODO: integrate with backend API
    // For now, redirect to trips page
    router.push('/trips');
  };

  return (
    <div className="min-h-[calc(100vh-65px)] px-6 py-12 md:py-20 max-w-4xl mx-auto flex flex-col justify-center">
      {/* Header */}
      <div className="mb-16">
        <Link href="/trips" className="sans text-[10px] uppercase tracking-widest text-gray-500 hover:text-accent transition flex items-center gap-2 mb-8">
          <span>&larr;</span> Back to Itineraries
        </Link>
        <div className="w-8 h-px bg-accent mb-6"></div>
        <p className="sans text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4">Edit Details</p>
        <h1 className="serif text-5xl md:text-6xl leading-[0.95]">
          Update<br />
          <i className="text-gray-400">Journey.</i>
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        
        {/* Name */}
        <div>
          <label htmlFor="name" className="sans text-[10px] uppercase tracking-widest text-gray-500 block mb-4">
            Trip Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. The Rome Chronicles"
            className="w-full border-b border-black bg-transparent py-4 serif text-2xl md:text-3xl outline-none placeholder:text-gray-300 focus:border-accent transition"
          />
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="start_date" className="sans text-[10px] uppercase tracking-widest text-gray-500 block mb-4">
              Start Date
            </label>
            <input
              id="start_date"
              name="start_date"
              type="date"
              required
              value={formData.start_date}
              onChange={handleChange}
              className="w-full border-b border-black bg-transparent py-3 sans text-sm outline-none text-black focus:border-accent transition"
              style={{ colorScheme: 'light dark' }}
            />
          </div>
          <div>
            <label htmlFor="end_date" className="sans text-[10px] uppercase tracking-widest text-gray-500 block mb-4">
              End Date
            </label>
            <input
              id="end_date"
              name="end_date"
              type="date"
              required
              value={formData.end_date}
              onChange={handleChange}
              className="w-full border-b border-black bg-transparent py-3 sans text-sm outline-none text-black focus:border-accent transition"
              style={{ colorScheme: 'light dark' }}
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="sans text-[10px] uppercase tracking-widest text-gray-500 block mb-4">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            placeholder="A brief overview of your travel plans..."
            className="w-full border-b border-black bg-transparent py-3 sans text-sm outline-none placeholder:text-gray-400 focus:border-accent transition resize-none"
          />
        </div>

        {/* Cover Photo */}
        <div>
          <label className="sans text-[10px] uppercase tracking-widest text-gray-500 block mb-4">
            Cover Photo <span className="text-gray-400 lowercase tracking-normal">(optional)</span>
          </label>
          <div className="relative w-full h-48 border border-dashed border-gray-400 hover:border-accent transition flex flex-col items-center justify-center group cursor-pointer bg-black/5 dark:bg-white/5">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            {coverPhoto ? (
              <p className="sans text-xs text-black">{coverPhoto.name}</p>
            ) : (
              <>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-accent mb-3 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="sans text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-accent transition">
                  Click or drag to update photo
                </p>
              </>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="pt-8 flex justify-end">
          <button
            type="submit"
            className="bg-black text-white px-12 py-4 sans text-xs uppercase tracking-widest hover:bg-accent border border-black hover:border-accent transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
