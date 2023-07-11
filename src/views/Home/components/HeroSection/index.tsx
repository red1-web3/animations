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
  // useEffect(() => {
  //   gsap.to("._descChars", {
  //     // clipPath: "inset(0 0 0 0)",
  //     autoAlpha: 0,
  //     scrollTrigger: {
  //       trigger: descWrapper.current,
  //       start: "top center",
  //       end: "10% top",
  //       markers: true,
  //       scrub: 0.6,
  //     },
  //   });
  // }, []);

  return (
    <section>
      <div className="_container mt-[10vh]">
        <h2 className="text-white text-[8vw]/[8vw] font-black uppercase">
          {title.match(/.{1,2}/g)?.map((chars, i) => (
            <span className="_titleChars" key={i}>
              {chars}
            </span>
          ))}
        </h2>
        <p
          className="text-[2.5vw]/[2.7vw] mt-[1vw] max-w-[45%] text-white font-bold"
          ref={descWrapper}
        >
          {description.match(/.{1,6}/g)?.map((chars, i) => {
            console.log(chars);
            return (
              <span
                className="_descChars opacity-0"
                key={i}
                // style={{ clipPath: "inset(0 0 0 100%)" }}
              >
                {chars}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
