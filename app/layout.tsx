import type { Metadata } from "next";
import "./globals.css";
import { ScrollToTop } from "../components/shared/scroll-to-top";

export const metadata: Metadata = {
  title: "Iftekhar • Portfolio",
  description: "Software Engineer | Next.js | React | Express.js | TypeScript",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="bg-[#e7e5e3]">
        <ScrollToTop />
        <div className="mx-auto min-h-screen w-full max-w-[1200px]">
          {children}
        </div>
      </body>
    </html>
  );
}
