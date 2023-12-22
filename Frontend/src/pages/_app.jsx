"use client";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import { persistStore } from "redux-persist";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.scss";
import SEO from "@components/seo";
import { PersistGate } from "redux-persist/integration/react";
import AppProvider from "../components/context/AppContext";
import { useEffect, useState } from "react";
import Preloader from "@components/preloader";

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true); // Add this state

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set the desired delay in milliseconds

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      <SEO
        font={
          "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Roboto:wght@400;500&display=swap"
        }
      />
      <Provider store={store}>
        <PersistGate loading={<Preloader />} persistor={persistor}>
          <AppProvider>
            {isLoading ? <Preloader /> : <Component {...pageProps} />}
            <ToastContainer />
          </AppProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
