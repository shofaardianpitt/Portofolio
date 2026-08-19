import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// Meta data SEO Lengkap
export const metadata: Metadata = {
  title: "Shofa Ardian Palwadi | Web & Mobile Developer",
  description:
    "Portofolio Shofa Ardian Palwadi - Mahasiswa D4 Rekayasa Perangkat Lunak PNB, Web & Mobile Developer.",
  keywords: [
    "Shofa Ardian Palwadi",
    "Portofolio",
    "Web Developer",
    "Mobile Developer",
    "Laravel",
    "Flutter",
    "Next.js",
    "Politeknik Negeri Bali",
  ],
  authors: [{ name: "Shofa Ardian Palwadi" }],
  creator: "Shofa Ardian Palwadi",
  icons: {
    icon: "/icon.svg",
  },
  // Tampilan saat link di-share ke WhatsApp, LinkedIn, Discord, dsb.
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://shofa-ardian.vercel.app", // Sesuaikan jika sudah ada domain/link Vercel
    title: "Shofa Ardian Palwadi | Web & Mobile Developer",
    description:
      "Portofolio Shofa Ardian Palwadi - Mahasiswa D4 Rekayasa Perangkat Lunak PNB, Web & Mobile Developer.",
    siteName: "Shofa Ardian Portfolio",
    images: [
      {
        url: "/ShofaArdianPittProfile.jpeg",
        width: 1200,
        height: 630,
        alt: "Shofa Ardian Palwadi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shofa Ardian Palwadi | Web & Mobile Developer",
    description:
      "Portofolio Shofa Ardian Palwadi - Mahasiswa D4 Rekayasa Perangkat Lunak PNB.",
    images: ["/ShofaArdianPittProfile.jpeg"],
  },
};

// Konfigurasi Viewport & Theme Color Browser
export const viewport: Viewport = {
  themeColor: "#111113",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#111113] text-[#ecece9] font-sans">
        {children}
      </body>
    </html>
  );
}