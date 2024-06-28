import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import GoogleTagManager from "@/components/Pixel/GooglePixel";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Holy - Prospere sua igreja",
  description: "Organize suas finanças e membros em um só lugar e prosper sua igreja utilizando o Holy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <GoogleTagManager/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
