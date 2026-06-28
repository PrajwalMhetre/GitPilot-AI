import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GitPilot AI',
  description: 'AI-powered GitHub assistant',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
