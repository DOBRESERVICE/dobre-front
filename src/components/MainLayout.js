import Head from "next/head";

export const MainLayout = ({ children, title = "Dobre" }) => {
  return (
    <>
      <Head>
        <title>{title} | Next</title>
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta charSet="utf-8" />
      </Head>

      <main>{children}</main>
    </>
  );
};
