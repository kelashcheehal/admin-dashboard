import { Jost } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Wooden Bazar",
  description: "Wooden Bazar Website",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${jost.variable} font-sans antialiased`}>
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
