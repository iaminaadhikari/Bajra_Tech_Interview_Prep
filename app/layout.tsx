import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bajra Tech Traineeship Prep",
  description: "Comprehensive study portal for the Bajra Technologies UI/UX Design Traineeship",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
