import { store } from "@/redux/store";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
// import 'swiper/css';
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={client}>
        <ReactQueryDevtools initialIsOpen={true} />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    </>
  );
}
