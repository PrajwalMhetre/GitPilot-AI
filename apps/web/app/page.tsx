import Link from 'next/link';
import { Bot, Github, Sparkles, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'AI chat workspace',
    description: 'Ask questions, review repositories, and plan work from one place.',
    icon: Bot,
  },
  {
    title: 'GitHub integration',
    description: 'Connect repos and keep your workflow flowing without leaving the app.',
    icon: Github,
  },
  {
    title: 'Secure access',
    description: 'Use JWT auth, OAuth, and OTP-based verification for trusted access.',
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="mb-8 flex items-center gap-3 text-cyan-400">
          <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-2">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">GitPilot AI</p>
            <h1 className="text-3xl font-semibold">The AI copilot for modern engineering teams</h1>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            <p className="text-lg text-slate-300">
              Build faster with a full-stack workspace for authentication, GitHub automation, AI chat,
              and production-ready APIs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/auth" className="rounded-full bg-cyan-500 px-5 py-2.5 font-medium text-slate-950 transition hover:bg-cyan-400">
                Open dashboard
              </Link>
              <Link href="/docs" className="rounded-full border border-slate-700 px-5 py-2.5 font-medium text-slate-200 transition hover:border-cyan-500 hover:text-cyan-400">
                Explore API
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
            <p className="mb-3 text-sm font-medium text-slate-400">Core capabilities</p>
            <div className="space-y-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-3 rounded-xl border border-slate-800 p-3">
                    <div className="rounded-xl bg-slate-800 p-2 text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{feature.title}</p>
                      <p className="text-sm text-slate-400">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
