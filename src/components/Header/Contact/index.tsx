import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact({ isNavActive }: { isNavActive: boolean }) {
  return (
    <ul className="text-zinc-400 font-medium">
      <motion.li
        initial={false}
        animate={{
          opacity: isNavActive ? 1 : 0,
          x: isNavActive ? 0 : -10,
          transition: {
            delay: isNavActive ? 0.45 : 0,
            type: "tween",
            duration: isNavActive ? 0.5 : 0.1,
          },
        }}
      >
        <strong className="uppercase text-[.9vw] !font-bold rise-text-shadow">
          Contact
        </strong>
      </motion.li>
      <motion.li
        initial={false}
        animate={{
          opacity: isNavActive ? 1 : 0,
          x: isNavActive ? 0 : -10,
          transition: {
            delay: isNavActive ? 0.5 : 0,
            type: "tween",
            duration: isNavActive ? 0.5 : 0.1,
          },
        }}
        className={"underline underline-offset-1 rise-text-shadow text-[1.1vw]"}
      >
        <a href="mailto:red1.throwcontact@gmail.com">
          red1.throwcontact@gmail.com
        </a>
      </motion.li>
      <motion.li
        initial={false}
        animate={{
          opacity: isNavActive ? 1 : 0,
          x: isNavActive ? 0 : -10,
          transition: {
            delay: isNavActive ? 0.55 : 0,
            type: "tween",
            duration: isNavActive ? 0.5 : 0.1,
          },
        }}
        className={"underline underline-offset-1 rise-text-shadow text-[1.1vw]"}
      >
        <Link href={"#"}>Linkedin</Link>
      </motion.li>
      <motion.li
        initial={false}
        animate={{
          opacity: isNavActive ? 1 : 0,
          x: isNavActive ? 0 : -10,
          transition: {
            delay: isNavActive ? 0.6 : 0,
            type: "tween",
            duration: isNavActive ? 0.5 : 0.1,
          },
        }}
        className={"underline underline-offset-1 rise-text-shadow text-[1.1vw]"}
      >
        <Link href={"#"}>Github</Link>
      </motion.li>
      <motion.li
        initial={false}
        animate={{
          opacity: isNavActive ? 1 : 0,
          x: isNavActive ? 0 : -10,
          transition: {
            delay: isNavActive ? 0.65 : 0,
            type: "tween",
            duration: isNavActive ? 0.5 : 0.1,
          },
        }}
        className={"underline underline-offset-1 rise-text-shadow text-[1.1vw]"}
      >
        <Link href={"#"}>Facebook</Link>
      </motion.li>
      <motion.li
        initial={false}
        animate={{
          opacity: isNavActive ? 1 : 0,
          x: isNavActive ? 0 : -10,
          transition: {
            delay: isNavActive ? 0.7 : 0,
            type: "tween",
            duration: isNavActive ? 0.5 : 0.1,
          },
        }}
        className={"underline underline-offset-1 rise-text-shadow text-[1.1vw]"}
      >
        <Link href={"#"}>Instagram</Link>
      </motion.li>
    </ul>
  );
}
