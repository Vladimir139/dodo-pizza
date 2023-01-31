import type { AppProps } from "next/app";
import { App } from "@app/index";
import { Provider } from "react-redux";
import { store } from "@shared/lib/storage/store";
import { Layout } from "@views/Layout/Layout";
import "@shared/lib/fonts/fonts.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <App>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </App>
  </Provider>
);

export default MyApp;
