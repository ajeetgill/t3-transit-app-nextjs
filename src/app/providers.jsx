"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Montserrat } from "next/font/google";
import { extendTheme } from "@chakra-ui/react";

const montserrat = Montserrat({
  weight: ["200", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const theme = extendTheme({
  fonts: {
    heading: "var(--font-montserrat)",
    body: "var(--font-montserrat)",
  },
});

export function Providers({ children }) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-montserrat: ${montserrat.style.fontFamily};
          }
        `}
      </style>
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </>
  );
}
