import Contact from "@/components/Header/Contact";
import NavItems from "@/components/Header/NavItems";
import { cx } from "@/utils";

export default function NavMenu({ isNavActive }: { isNavActive: boolean }) {
  return (
    <div
      className={cx(
        "fixed inset-0",
        isNavActive ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <div className="absolute inset-0 flex pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            style={{
              height: !isNavActive ? 0 : "100vh",
              transitionDelay: isNavActive
                ? `${i * 25}ms`
                : `${300 + i * 25}ms`,
            }}
            className={cx(
              "w-full ease-out navBgElements relative z-[-1] bg-[#303030] border-r border-r-[#f5f2eb]/20",
              i + 1 === 12 && "border-none"
            )}
          ></div>
        ))}
      </div>

      <div className="h-full w-full pl-[8.4vw] pr-[7.6vw] pt-[20vh] pb-[7vh] flex gap-x-[10vw] relative z-[3]">
        <div className="w-[20vw] h-full flex flex-col justify-between">
          <div></div>
          <Contact isNavActive={isNavActive} />
        </div>
        <NavItems isNavActive={isNavActive} />
      </div>
    </div>
  );
}
