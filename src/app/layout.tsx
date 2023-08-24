import './globals.css'
import type { Metadata } from 'next';
import './header';
import './footer';

export const metadata: Metadata = {
  title: 'CatcorpLLC',
  description: 'Number 1 Software Development Firm Ran by Cats',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
  
      <body>{children}</body>
    </html>
  )
}
