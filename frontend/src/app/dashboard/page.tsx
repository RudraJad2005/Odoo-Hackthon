import PageHeader from '@/components/shared/PageHeader';

export default function DashboardPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <PageHeader title="Dashboard" subtitle="Screen 3 - Home overview" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-black/10 bg-white p-6">Trip summary</div>
        <div className="rounded-3xl border border-black/10 bg-white p-6">Budget preview</div>
        <div className="rounded-3xl border border-black/10 bg-white p-6">Recent activity</div>
      </div>
    </section>
  );
}
