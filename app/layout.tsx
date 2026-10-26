import type { Metadata } from "next";
import "./globals.css";
import { showcase } from "../lib/data";

export const metadata: Metadata = { title: "Iftekhar Hossain — Software Engineer", description: "Portfolio of Iftekhar Hossain, a frontend software engineer building expressive interfaces for the web." };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><head>{showcase.map((item) => <link key={item.image} rel="preload" as="image" href={item.image} />)}</head><body className="bg-[#e7e5e3]"><div className="mx-auto min-h-screen w-full max-w-[1200px]">{children}</div></body></html>;
}
