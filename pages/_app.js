import "bootstrap/dist/css/bootstrap.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '@/assets/fonts/stylesheet.css';
import '@/assets/css/style.scss';

import "nprogress/nprogress.css";
import '@/component/TopProgressBar.css';
import dynamic from "next/dynamic";
const TopProgressBar = dynamic(
  () => {
    return import("component/TopProgressBar");
  },
  { ssr: false },
);

export default function App({ Component, pageProps }) {
  return (
  <>
  <TopProgressBar />
   
    <Component {...pageProps} />
    
  </>
 );
}
