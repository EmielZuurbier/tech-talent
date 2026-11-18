import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const description =
  "Dé plek voor de Kop van Noord-Holland en omstreken waar uitdagende vacatures en ambitieuze tech-professionals elkaar treffen.";

export const metadata: Metadata = {
  metadataBase: new URL("https://tech-talent.nu"),
  title: {
    default: "Tech-talent.nu | Vacatures in de techniek",
    template: "%s | Tech-talent.nu",
  },
  description,
  applicationName: "Tech-talent.nu",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://tech-talent.nu",
    siteName: "Tech-talent.nu",
    title: "Welkom bij Tech-talent",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Welkom bij Tech-talent",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="nl" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full bg-navy font-sans text-white">{children}</body>
    </html>
  );
}
