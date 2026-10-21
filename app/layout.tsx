import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Iftekhar Hossain — Software Engineer", description: "Portfolio of Iftekhar Hossain, a frontend software engineer building expressive interfaces for the web." };

export default function RootLayout({ children }: LayoutProps<"/">) { return <html lang="en"><body className="bg-[#e7e5e3]"><div className="mx-auto min-h-screen w-full max-w-[1200px]">{children}</div></body></html>; }
