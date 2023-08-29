import './globals.css'
import type { Metadata } from 'next';
import Header from './header';
import Footer from './footer';
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
      <body>
        <Header></Header>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
