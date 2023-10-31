import "./globals.css";
import Header from "./components/header";
import { Providers } from "./providers";
import { Heading } from "@chakra-ui/react";

export const metadata = {
  title: "T3 Transit App PEI",
  description: "Because I was tired of the kinda-official app being so bad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
