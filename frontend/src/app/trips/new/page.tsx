import PageHeader from '@/components/shared/PageHeader';

export default function NewTripPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <PageHeader title="Create Trip" subtitle="Screen 4 - New trip form" />
      <div className="mt-10 rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
        <p className="text-sm text-black/70">Trip form scaffold goes here.</p>
      </div>
    </section>
  );
}
