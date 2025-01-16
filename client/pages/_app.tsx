import "@/styles/style.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { Layout } from "@/components/layout/Layout/Layout";
import { persistor, store } from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
