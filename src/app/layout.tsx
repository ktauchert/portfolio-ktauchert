import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const montRegular = localFont({
  src: "./fonts/Montserrat-Regular.ttf",
  variable: "--mont-regular",
  weight: "300",
});

export const metadata: Metadata = {
  title: "KTauchert-Dev",
  description:
    "Full stack web developer with a passion for 3D, Three.js, Blender, and coffee. Check out my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-[#171717] h-32 overflow-y-scroll"
    >
      <body
        className={`${montRegular.className}  antialiased text-zinc-100 selection:bg-cyan-300 selection:text-cyan-950 flex flex-col `}
      >
        <div
          id="background"
          className="fixed top-0 z-[-2] h-full w-full bg-neutral-900 bg-[radial-gradient(ellipse_50%_70%_at_50%_-10%,rgba(22,78,99,0.4),rgba(255,255,255,0))] antialiased"
        ></div>
        <header>
          <Navigation />
        </header>
        <main className="lg:mx-auto flex flex-col justify-center max-w-[1280px] mx-5">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
