import Link from 'next/link';

const endpoints = [
  { title: 'Health', path: '/health' },
  { title: 'Auth register', path: '/auth/register' },
  { title: 'Auth login', path: '/auth/login' },
  { title: 'AI chat', path: '/ai/chat' },
  { title: 'GitHub connect', path: '/github/connect' },
  { title: 'OAuth providers', path: '/oauth/providers' },
];

export default function DocsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">API reference</h1>
        <p className="mt-2 text-slate-400">The FastAPI backend exposes the core endpoints used by the experience.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {endpoints.map((endpoint) => (
          <Link key={endpoint.path} href={`http://127.0.0.1:8000/api/v1${endpoint.path}`} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-500">
            <p className="font-medium">{endpoint.title}</p>
            <p className="mt-1 text-sm text-slate-400">{endpoint.path}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
