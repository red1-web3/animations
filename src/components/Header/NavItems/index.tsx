import { navItems } from "@/config/constant";
import Link from "next/link";
import { motion } from "framer-motion";
import { cx } from "@/utils";

export default function NavItems({ isNavActive }: { isNavActive: boolean }) {
  return (
    <nav>
      <ul className="space-y-2">
        {navItems.map(({ label, url }, i) => (
          <li
            key={i}
            className={cx(
              "text-[10vw]/[11vw] font-black text-zinc-300 uppercase ease-linear duration-300 navElements transition-[shadow_transform]",
              isNavActive && "delay-700"
            )}
          >
            <Link href={url}>
              {label.match(/.{1,2}/g)?.map((chars, i) => (
                <motion.span
                  initial={{
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                    opacity: 0,
                  }}
                  animate={{
                    opacity: isNavActive ? 1 : 0,
                    clipPath: isNavActive
                      ? "polygon(100% 0, 0 0, 0 100%, 100% 100%)"
                      : "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                  }}
                  transition={{
                    delay: isNavActive ? 0.4 : 0,
                    duration: 0.5,
                    type: "tween",
                  }}
                  key={i}
                >
                  {chars}
                </motion.span>
              ))}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
