import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

/* Kahoot uses Montserrat globally — weight 700+ for headings, 400-600 for body */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#050505" },
  ],
};

export const metadata: Metadata = {
  title: "Epiphany Learn — AI for Everyone",
  description:
    "Learn AI in 30-minute modules. Cut through the hype and build real skills you can use every day.",
  metadataBase: new URL("https://epiphany.help"),
  openGraph: {
    title: "Epiphany Learn — AI for Everyone",
    description: "Learn AI in 30-minute modules.",
    siteName: "Epiphany Learn",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
