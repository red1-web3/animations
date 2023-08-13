import Header from "@/components/Header";
import clsx from "clsx";
import { Inter_Tight, Rajdhani } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter_Tight({ subsets: ["latin"], variable: "--inter-tight" });
const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--rajdani",
  weight: ["300", "400", "700"],
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={clsx(inter.className, rajdhani.variable)}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
