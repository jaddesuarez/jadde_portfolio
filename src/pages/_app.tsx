import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import chakraTheme from "../ui/theme/chakraTheme";
import { I18nextProvider } from "react-i18next";
import { i18n } from "@/infrastructure/config/i18n.config";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </I18nextProvider>
  );
}
