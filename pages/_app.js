import "bootstrap/dist/css/bootstrap.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@/assets/fonts/stylesheet.css";
import "@/assets/css/style.scss";

import "nprogress/nprogress.css";
import "@/component/TopProgressBar.css";
import dynamic from "next/dynamic";
import { SnackbarProvider } from "notistack";
import { SessionProvider } from "next-auth/react";
import { AuthContextProvider } from "@/store/auth-context";
const TopProgressBar = dynamic(
  () => {
    return import("component/TopProgressBar");
  },
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  return (
    <>
      <TopProgressBar />
      <SnackbarProvider
        maxSnack={1}
        preventDuplicate
        variant="success"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
      >
        <SessionProvider session={pageProps.session}>
          <AuthContextProvider>
            <Component {...pageProps} />
          </AuthContextProvider>
        </SessionProvider>
      </SnackbarProvider>
    </>
  );
}
