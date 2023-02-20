import NavBar from "@/Components/NavBar";
import type { AppProps } from "next/app";
import "../styles/dist/dist.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
