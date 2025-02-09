import type { Metadata } from "next";
import { Geist, Geist_Mono,IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider} from "@clerk/nextjs";
import Sidebar from '@/components/shared/Sidebar'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const Ibm_Plex = IBM_Plex_Sans({
  subsets:["latin"],
  weight:['400','500','600','700'],
  variable:'--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Docify",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{variables:{colorPrimary:'#624cf5'}}}>
    <html lang="en">
      <body
        className={cn("font-IBMPlex antialiased",Ibm_Plex)} 
      >
        {/* <Sidebar/> */}
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
