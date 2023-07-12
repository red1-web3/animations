import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const title = "Frontend  Developer";
const description =
  "I’m an award winning creative developer with over 6 years experience, based in Amsterdam, the Netherlands.";

const HeroSection = () => {
  const descWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("._descChars", {
        rotate: 0,
        scale: 1,

        autoAlpha: 1,
        stagger: {
          each: 0.2,
        },
        scrollTrigger: {
          trigger: descWrapper.current,
          start: "top 40%",
          end: "100% top",
          // markers: true,
          scrub: 2,
          pin: true,
        },
      });
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

        <div className="grid grid-cols-2 gap-x-[5vw]">
          <p
            className="text-[2.5vw]/[2.7vw] mt-[1vw] text-white font-bold"
            ref={descWrapper}
          >
            {description.split("")?.map((chars, i) => {
              return (
                <span
                  className="_descChars inline-block opacity-0 whitespace-pre"
                  key={i}
                  style={{
                    transform: `rotate(30deg) scale(.5)`,
                  }}
                >
                  {chars}
                </span>
              );
            })}
          </p>

          <div className="mt-[20vw]">
            <figure className="relative flex justify-center">
              <img
                src={"/imgs/profile-img.jpg"}
                alt="Profile"
                className="w-[20vw] aspect-square object-cover object-top"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
