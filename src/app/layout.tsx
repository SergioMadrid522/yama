import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainNavbar from "../components/mainNavMenu/MainNavbar";
import SecondNavbar from "../components/secondNavMenu/SecondNavbar";
import Footer from "../components/footer/Footer";
import WhatsAppBtn from "../components/whatsAppBtn/WhatsAppBtn";
import GoToTop from "@/components/goToTop/GoToTop";
import { ModalProvider } from "@/hooks/ModalProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Menú | SAKURA Sushi Restaurant",
  description:
    "Menú oficial de SAKURA Sushi Restaurant. Conoce nuestros platillos, precios y promociones vigentes. Ubicados en Altamira Zona centro.",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ModalProvider>
          <div className="w-0 h-0" id="pageTop"></div>
          <MainNavbar />
          <SecondNavbar />
          {children}
          <GoToTop />
          <WhatsAppBtn />
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
