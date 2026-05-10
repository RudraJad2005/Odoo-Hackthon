import PageHeader from '@/components/shared/PageHeader';

export default function TripsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <PageHeader title="Trips" subtitle="Screen 6 - Trip listing" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-3xl border border-black/10 bg-white p-6">Trip card placeholder</div>
        <div className="rounded-3xl border border-black/10 bg-white p-6">Trip card placeholder</div>
        <div className="rounded-3xl border border-black/10 bg-white p-6">Trip card placeholder</div>
      </div>
    </section>
  );
}
