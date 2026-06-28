"use client";

import { FormEvent, useState } from 'react';
import axios from 'axios';

export default function AuthPage() {
  const [email, setEmail] = useState('demo@gitpilot.ai');
  const [password, setPassword] = useState('StrongPass123!');
  const [status, setStatus] = useState('');

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/login', { email, password });
      localStorage.setItem('access_token', response.data.access_token);
      setStatus('Signed in successfully.');
    } catch {
      setStatus('Unable to sign in.');
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center justify-center px-6 py-12">
      <div className="w-full rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl shadow-black/30">
        <h1 className="mb-2 text-2xl font-semibold">Sign in</h1>
        <p className="mb-6 text-sm text-slate-400">Use the demo credentials to test the authentication flow.</p>
        <form className="space-y-4" onSubmit={onSubmit}>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 focus:border-cyan-500 focus:outline-none"
            placeholder="Email"
            type="email"
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 focus:border-cyan-500 focus:outline-none"
            placeholder="Password"
            type="password"
          />
          <button className="w-full rounded-xl bg-cyan-500 px-4 py-3 font-medium text-slate-950 transition hover:bg-cyan-400" type="submit">
            Continue
          </button>
        </form>
        {status ? <p className="mt-4 text-sm text-cyan-400">{status}</p> : null}
      </div>
    </main>
  );
}
