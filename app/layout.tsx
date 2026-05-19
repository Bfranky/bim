import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title:       "Bim's Grills N Chops | Fast Food · Ode-Remo, Ogun State",
  description: "Bim's Grills N Chops — the best grills, chops and fast food in Ode-Remo, Ogun State. Order now or visit us on Okeola Olomowewe Street.",
  keywords:    "grills Ode-Remo, fast food Ogun State, Bims Grills, chops Ode-Remo, takeaway Remo",
  openGraph: {
    title:       "Bim's Grills N Chops",
    description: "Real fire. Real flavour. Fast food done right in Ode-Remo, Ogun State.",
    type:        'website',
    locale:      'en_NG',
    siteName:    "Bim's Grills N Chops",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;1,400;1,700&family=Barlow:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
