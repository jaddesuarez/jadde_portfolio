import Head from "next/head";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>{t("AppTitle")}</Head>
      <main>
        <h1>TEST</h1>
      </main>
    </>
  );
}

export default Home;
