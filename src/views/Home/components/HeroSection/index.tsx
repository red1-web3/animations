import ParticlesComponent from "@/components/Particles";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Lottie from "react-lottie-player";
import flashBack from "../../../../../public/json/flash-black.json";

const title = "Frontend  Developer";
const name = "Redwan Ahmed";
const description =
  "I’m an award winning creative developer with over 6 years experience, based in Amsterdam, the Netherlands.";

const HeroSection = () => {
  const descWrapper = useRef<HTMLParagraphElement>(null);
  const sliderWrapper = useRef<HTMLDivElement>(null);
  const ySlide = useRef<HTMLDivElement>(null);
  const xSlide = useRef<HTMLDivElement>(null);
  const profileImage = useRef<HTMLImageElement>(null);

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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: descWrapper.current,
          start: "top 35%",
          // markers: true,
          scrub: 1,
          pin: true,
        },
      });
      tl.to("._descChars", {
        autoAlpha: 1,
        pointerEvents: "all",
        duration: 0.7,
        ease: "back.in",
        stagger: {
          from: "edges",
          each: 0.01,
        },
      });

      // Slider
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: sliderWrapper.current,
          start: "top 15%",
          pin: true,
          scrub: 1,
          // markers: true,
        },
      });

      tl2
        .to(ySlide.current, {
          yPercent: -33.33,
        })
        .to(xSlide.current, {
          xPercent: -100,
        })
        .to(ySlide.current, { yPercent: -67 });

      // Name Effect

      gsap.to(".__nameChars", {
        clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
        autoAlpha: 1,
        scrollTrigger: {
          trigger: ".__nameChars",
          start: "top 80%",
          scrub: true,
          end: "top 40%",
        },
      });
      gsap.to(profileImage.current, {
        autoAlpha: 1,
        y: 0,
        scrollTrigger: {
          trigger: profileImage.current,
          start: "top 80%",
          scrub: true,
          end: "top 40%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section>
      <div className="_container mt-[10vh] fdfd">
        <h2 className="text-zinc-200 text-[8vw]/[8vw] font-black uppercase">
          {title.match(/.{1,2}/g)?.map((chars, i) => (
            <span className="_titleChars" key={i}>
              {chars}
            </span>
          ))}
        </h2>

        <div className="flex justify-between">
          <p
            className="text-[2.5vw]/[2.7vw] mt-[1vw] text-zinc-300 font-bold w-[45%]"
            ref={descWrapper}
          >
            {description.split("")?.map((chars, i) => {
              return (
                <span
                  className="_descChars inline-block opacity-0 whitespace-pre pointer-events-none"
                  key={i}
                >
                  {chars}
                </span>
              );
            })}
          </p>

          <div
            ref={sliderWrapper}
            className="w-[40%] h-[70vh] mt-[8vw] relative"
          >
            <div className="overflow-hidden flex flex-col relative h-full w-full">
              <div ref={ySlide} className="blur-3xl">
                <div className="h-[70vh] w-full bg-white/10"></div>
                <div ref={xSlide} className="flex">
                  <div className="h-[70vh] shrink-0 w-full bg-zinc-900/70"></div>
                  <div className="h-[70vh] shrink-0 w-full bg-white/10"></div>
                </div>
                <div className="h-[70vh] shrink-0 w-full bg-zinc-900/70"></div>
              </div>
              <div className="absolute inset-0 px-[2vw] h-full flex flex-col">
                <header className="flex items-center justify-end pt-[1vw]">
                  <Lottie
                    animationData={flashBack}
                    play
                    speed={1}
                    style={{ width: "5vw", height: "5vw" }}
                  />
                </header>

                <div>
                  <img
                    ref={profileImage}
                    src="/imgs/img.png"
                    alt="image"
                    className="opacity-0 translate-y-1"
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 translate-y-1/3 text-right translate-x-1/3 w-1/2">
              <h2 className="text-[4vw]/[4vw] uppercase font-black text-end text-zinc-200">
                {name.match(/.{1,2}/g)?.map((chrs, i) => (
                  <span
                    key={i}
                    className="__nameChars opacity-0 inline"
                    style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                  >
                    {chrs}
                  </span>
                ))}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <ParticlesComponent />
    </section>
  );
};

export default HeroSection;
