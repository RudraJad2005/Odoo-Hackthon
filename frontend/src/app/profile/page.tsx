import PageHeader from '@/components/shared/PageHeader';

export default function ProfilePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <PageHeader title="Profile" subtitle="Screen 7 - User profile" />
      <div className="mt-10 rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
        <p className="text-sm text-black/70">Profile details go here.</p>
      </div>
    </section>
  );
}
