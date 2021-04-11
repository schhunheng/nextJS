import "../styles/globals.css";
import "../styles/Button.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./../components/containers/nav";
import Header from "./../components/containers/header";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/router";
import { FormContextProvider } from "./../contexts/FormContext";

import {ProductContextProvider} from './../contexts/ProductContext'
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
     <ProductContextProvider>
        <Header />
        {router.pathname === `/` ||
        router.pathname === `/login` ||
        router.pathname === `/register` ? (
          <div />
        ) : (
          <Nav />
        )}
        <FormContextProvider>
          <Component {...pageProps} />
        </FormContextProvider>
        </ProductContextProvider>
    </>
  );
}
export default MyApp;
