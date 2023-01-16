import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" id="theme" className="dark">
      <Head />
      <body className="dark:bg-gray-900 bg-white text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
