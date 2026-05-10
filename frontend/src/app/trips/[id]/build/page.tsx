import PageHeader from '@/components/shared/PageHeader';

export default function BuildItineraryPage({ params }: { params: { id: string } }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <PageHeader title="Build Itinerary" subtitle={`Screen 5 - Trip ${params.id}`} />
      <div className="mt-10 rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
        <p className="text-sm text-black/70">Section builder and day blocks go here.</p>
      </div>
    </section>
  );
}
