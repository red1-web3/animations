import NavMenu from "@/components/Header/NavMenu";
import { cx } from "@/utils";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TbComet } from "react-icons/tb";
import { useLockBodyScroll } from "react-use";

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  const logo = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLElement>(null);

  useLockBodyScroll(isNavActive);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(header.current, {
        scrollTrigger: {
          trigger: document.body,
          start: "3% top",
          onEnter: () => setIsAnimate(true),
          onLeaveBack: () => setIsAnimate(false),
        },
      });
    });
  }, []);

  const handleMenuClick = () => {
    const bgElements = document.querySelectorAll(".navBgElements");

    bgElements.forEach((e: any) => {
      e.style.transition = "500ms";
    });

    let t = setTimeout(() => {
      bgElements.forEach((e: any) => {
        e.style.transition = "0ms";
      });
    }, 0);

    setIsNavActive((prev) => !prev);
  };

  return (
    <motion.header
      initial={false}
      animate={{
        paddingLeft: isAnimate ? "4vw" : "8.4vw",
        paddingRight: isAnimate ? "4vw" : "7.6vw",
        paddingBlock: isAnimate ? "3.5vh" : "9vh",
      }}
      transition={{ duration: 0.4, type: "keyframes" }}
      ref={header}
      className="w-full fixed top-0 left-0"
    >
      <div className="flex items-center justify-between w-full">
        <div ref={logo}>
          <Link href={"#"}>
            <strong className="text-white text-[1.3vw] uppercase relative z-[999]">
              Red
            </strong>
          </Link>
        </div>

        <div className="absolute z-[3] right-[16vw] top-1/2 -translate-y-1/2">
          <ul
            className={cx(
              "flex gap-x-[2vw] items-end",
              isAnimate ? "flex-row" : "flex-col"
            )}
          >
            <motion.li
              layoutId="workAvailable"
              transition={{
                ease: "easeOut",
                duration: isAnimate ? 0.3 : 0.2,
              }}
              className="font-semibold text-white text-[.8vw] flex items-center gap-x-[.2vw]"
            >
              <span className="inline-block bg-green-500 h-[.6vw] aspect-square rounded-full translate-y-px"></span>
              AVAILABLE FOR FREELANCE WORK
            </motion.li>
            <motion.li layoutId="gmail">
              <a
                href="mailto:red1.throwcontact@gmail.com
"
                className="font-semibold text-white uppercase text-[.8vw] flex items-center gap-x-[.2vw]"
              >
                <span className="text-[1.1vw] -rotate-90">
                  <TbComet />
                </span>
                red1.throwcontact@gmail.com
              </a>
            </motion.li>
          </ul>
        </div>
        <button
          onClick={handleMenuClick}
          className="text-white aspect-square h-[2.6vw] relative z-[999]"
        >
          <span
            className={cx(
              "duration-300 absolute top-1/3 left-0 w-full h-[5%] bg-white",
              isNavActive && "rotate-45 !top-1/2 -translate-y-1/2"
            )}
          ></span>
          <span
            className={cx(
              "duration-300 absolute top-2/3 left-0 w-full h-[5%] bg-white",
              isNavActive && "-rotate-45 !top-1/2 -translate-y-1/2"
            )}
          ></span>
        </button>

        <NavMenu isNavActive={isNavActive} />
      </div>
    </motion.header>
  );
};

export default Header;
