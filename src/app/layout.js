import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

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
        {/* Adicione o Google Tag aqui */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16628924935"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16628924935');
            `,
          }}
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
