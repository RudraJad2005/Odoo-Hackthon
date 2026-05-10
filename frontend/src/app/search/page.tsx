import PageHeader from '@/components/shared/PageHeader';

export default function SearchPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <PageHeader title="Search" subtitle="Screen 8 - City and activity search" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-white p-6">City results</div>
        <div className="rounded-3xl border border-black/10 bg-white p-6">Activity results</div>
      </div>
    </section>
  );
}
