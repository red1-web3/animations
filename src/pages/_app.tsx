import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { AppProps } from "next/app";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
