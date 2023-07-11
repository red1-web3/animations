import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { AppProps } from "next/app";

gsap.registerPlugin(ScrollTrigger);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
