import type { AppProps } from "next/app";
import { App } from "@app/index";
import { Provider } from "react-redux";
import { store, persistor } from "@shared/lib/storage/store";
import { Layout } from "@views/Layout/Layout";
import "@shared/lib/fonts/fonts.css";
import { PersistGate } from "redux-persist/integration/react";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </App>
    </PersistGate>
  </Provider>
);

export default MyApp;
