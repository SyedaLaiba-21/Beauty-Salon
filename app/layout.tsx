import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Beauty & Health | Modern Luxury Aesthetics & Spa Salon",
  description:
    "Experience world-class luxury beauty, skincare, hair styling, nail care, and spa treatments. Book your personalized beauty appointment online.",
  keywords: [
    "beauty salon",
    "luxury spa",
    "skin care",
    "hair salon",
    "nail aesthetics",
    "hydrafacial",
    "makeup artist",
    "dermatology clinic",
    "beauty treatments",
  ],
  authors: [{ name: "Beauty & Health Salon" }],
  openGraph: {
    title: "Beauty & Health | Modern Luxury Aesthetics & Spa Salon",
    description:
      "Experience world-class luxury beauty, skincare, hair styling, nail care, and spa treatments.",
    type: "website",
    locale: "en_US",
    siteName: "Beauty & Health",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty & Health | Modern Luxury Aesthetics",
    description:
      "Experience world-class luxury beauty, skincare, hair styling, and spa treatments.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#492828",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} light scroll-smooth`}
    >
      <body className="bg-background text-on-surface font-body antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
