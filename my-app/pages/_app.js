import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import Navbar from "@/Component/Navbar";
export default function App({ Component, pageProps }) {
  // console.log(store);
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
