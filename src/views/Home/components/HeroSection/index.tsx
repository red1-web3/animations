import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const title = "Frontend  Developer";
const description =
  "I’m an award winning creative developer with over 6 years experience, based in Amsterdam, the Netherlands.";

const HeroSection = () => {
  const descWrapper = useRef<HTMLParagraphElement>(null);
  const sliderWrapper = useRef<HTMLImageElement>(null);
  const ySlide = useRef<HTMLImageElement>(null);
  const xSlide = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      gsap.to("._titleChars", {
        clipPath: "inset(0 0 0 100%)",
        autoAlpha: 0,
        scrollTrigger: {
          trigger: document.body,
          start: "3% top",
          end: "10% top",
          scrub: 0.6,
        },
      });

      // Description Pin
      gsap.to("._descChars", {
        rotate: 0,
        scaleX: 1,
        autoAlpha: 1,
        pointerEvents: "all",
        duration: 0.5,
        ease: "back.in",
        stagger: {
          from: "edges",
          each: 0.01,
        },
        scrollTrigger: {
          trigger: descWrapper.current,
          start: "top 35%",
          // markers: true,
          pin: true,
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sliderWrapper.current,
          start: "top 10%",
          pin: true,
          scrub: 1,
        },
      });

      tl.to(ySlide.current, {
        yPercent: -33.33,
      })
        .to(xSlide.current, {
          xPercent: -100,
        })
        .to(ySlide.current, { yPercent: -67 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section>
      <div className="_container mt-[10vh] fdfd">
        <h2 className="text-white text-[8vw]/[8vw] font-black uppercase">
          {title.match(/.{1,2}/g)?.map((chars, i) => (
            <span className="_titleChars" key={i}>
              {chars}
            </span>
          ))}
        </h2>

        <div className="flex justify-between">
          <p
            className="text-[2.5vw]/[2.7vw] mt-[1vw] text-white font-bold w-[45%]"
            ref={descWrapper}
          >
            {description.split("")?.map((chars, i) => {
              return (
                <span
                  className="_descChars inline-block opacity-0 whitespace-pre pointer-events-none"
                  key={i}
                  style={{
                    transform: `scaleX(1.4)`,
                  }}
                >
                  {chars}
                </span>
              );
            })}
          </p>
          <div
            ref={sliderWrapper}
            className="w-[45%] h-[80vh] cdc mt-[8vw] overflow-hidden flex flex-col"
          >
            <div ref={ySlide}>
              <div className="h-[80vh] w-full bg-red-500"></div>
              <div ref={xSlide} className="flex">
                <div className="h-[80vh] shrink-0 w-full bg-green-500"></div>
                <div className="h-[80vh] shrink-0 w-full bg-orange-500"></div>
              </div>
              <div className="h-[80vh] shrink-0 w-full bg-zinc-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
