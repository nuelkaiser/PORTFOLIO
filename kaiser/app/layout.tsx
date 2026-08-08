import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Majekodunmi Immanuel | Portfolio",
  description:
    "Software Engineer. Selected work across Abode, Abode Academy, TicksOTR, and City Spaces & Bookings.",
  openGraph: {
    title: "Majekodunmi Immanuel | Portfolio",
    description:
      "Software engineer based in Lagos. Selected product work and experience.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-foreground">{children}</body>
    </html>
  );
}
