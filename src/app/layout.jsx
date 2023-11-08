import "./globals.css";
import Head from "next/head";
import Header from "./components/header";
import { Providers } from "./providers";
import { Heading } from "@chakra-ui/react";
import Script from "next/script";

export const metadata = {
  title: "T32 Transit App PEI",
  description: "Because I was tired of the kinda-official app being so bad.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      ></Script>
      <html lang="en">
        <body>
          <Providers>
            <Header />
            {children}
          </Providers>
        </body>
      </html>
    </>
  );
}
