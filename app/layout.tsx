import type { Metadata } from "next";
import { Instrument_Serif, Carattere, Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/Navbar";
import { BubbleBackground } from "@/components/animate-ui/backgrounds/bubble";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa"; // ✅ add this import

const instrument = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const lexend = Lexend({
  variable: "--lexend",
  subsets: ["latin"],
});

const carattere = Carattere({
  variable: "--font-carattere",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Priya Parlour",
  description: "Beauty and Care Services",
  icons: {
    icon: "/plogo2.png",
    shortcut: "/plogo2.png",
    apple: "/plogo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/plogo2.png" type="image/png" />
      </head>

      <body
        className={`${lexend.className} ${instrument.variable} ${carattere.variable} antialiased relative scroll-smooth`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BubbleBackground
            interactive
            className="fixed inset-0 hidden lg:flex pointer-events-auto items-center justify-center rounded-xl"
          />
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>

          {/* ✅ Floating WhatsApp Button */}
          <a
            href="https://wa.me/918452017063?text=Hello%20Priya%20Parlour,%20this%20is%20a%20message%20from%20your%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="whatsapp-icon" />
          </a>
        </ThemeProvider>
      </body>
    </html>
  );
}
