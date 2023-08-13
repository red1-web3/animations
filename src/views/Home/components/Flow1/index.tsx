import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

const Flow1 = () => {
  const wrapper = useRef(null);
  const textContent = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapper.current,
            start: "top 60%",
          },
        })
        .to(wrapper.current, {
          height: "60vh",
        })
        .to(textContent.current, {
          rotate: 0,
          autoAlpha: 1,
        });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section>
      <div className="_container h-[60vh]">
        <div ref={wrapper} className="w-full bg-white/10 relative">
          <div
            ref={textContent}
            className="absolute m-auto inset-0 origin-left rotate-3 opacity-0 _c_all gap-x-[1vw] uppercase text-[4vw] font-black text-white"
          >
            Do you
            <div className="text-orange-500">
              <Typewriter
                options={{
                  strings: ["Like", "Love", "Enjoy", "Prefer"],
                  autoStart: true,
                  deleteSpeed: 30,
                  delay: 40,
                  loop: true,
                  cursor: "",
                }}
              />
            </div>
            animations?
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flow1;
