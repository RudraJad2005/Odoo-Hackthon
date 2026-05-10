import PageHeader from '@/components/shared/PageHeader';

export default function TripDetailPage({ params }: { params: { id: string } }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <PageHeader title="Itinerary & Budget" subtitle={`Screen 9 - Trip ${params.id}`} />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-white p-6">Itinerary summary</div>
        <div className="rounded-3xl border border-black/10 bg-white p-6">Budget summary</div>
      </div>
    </section>
  );
}
