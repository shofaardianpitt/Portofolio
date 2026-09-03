import type { Metadata, Viewport } from "next";
import { Montserrat, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Inisialisasi Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

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
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ardianpitt-portofolio.vercel.app",
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
      className={`${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      {/* Pasang montserrat.className langsung di class body */}
      <body className={`${montserrat.className} min-h-full flex flex-col bg-[#111113] text-[#ecece9]`}>
        {children}
      </body>
    </html>
  );
}