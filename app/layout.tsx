import type { Metadata } from "next";
import { Instrument_Serif, Carattere, Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar } from "@/components/Navbar";
import { BubbleBackground } from "@/components/animate-ui/backgrounds/bubble";
import Footer from "@/components/Footer";
import Script from "next/script"; // ✅ Add this

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
        {/* ✅ Prevent zooming globally */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/plogo2.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/plogo2.png" />
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

          {/* ✅ WhatsApp Floating Button */}
          <a
            href="https://wa.me/918452017063?text=Hello%20Priya%20Parlour,%20this%20is%20a%20message%20from%20your%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
          >
            <img
              src="/whatsapp.png"
              alt="WhatsApp Chat"
              className="whatsapp-icon"
            />
          </a>
        </ThemeProvider>

        {/* ✅ Disable zoom gestures (mobile + desktop) */}
        <Script id="disable-zoom">
          {`
            // Prevent pinch zoom
            document.addEventListener('gesturestart', e => e.preventDefault());
            document.addEventListener('gesturechange', e => e.preventDefault());
            document.addEventListener('gestureend', e => e.preventDefault());

            // Prevent Ctrl + scroll zoom
            document.addEventListener('wheel', e => {
              if (e.ctrlKey) e.preventDefault();
            }, { passive: false });

            // Prevent double-tap zoom
            let lastTouchEnd = 0;
            document.addEventListener('touchend', e => {
              const now = new Date().getTime();
              if (now - lastTouchEnd <= 300) e.preventDefault();
              lastTouchEnd = now;
            }, false);
          `}
        </Script>
      </body>
    </html>
  );
}
