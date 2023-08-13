import clsx from "clsx";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import Lottie from "react-lottie-player";
import smile from "../../../../../public/json/smile.json";

const texts = [
  "I",
  "combined",
  "various",
  "animations",
  "from",
  "different",
  "websites",
  "Here",
  "you",
  "can",
  "see",
];

const Flow2 = () => {
  const wordsWrapper = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("._flow2Words", {
        scrollTrigger: {
          trigger: wordsWrapper.current,
          start: "center 80%",
          end: "center 20%",
          onEnter: () => {
            gsap.to("._flow2Words", {
              y: 0,
              autoAlpha: 1,
              stagger: {
                amount: 0.3,
              },
            });
          },
          onEnterBack: () => {
            console.log("Enter back");
            gsap.to("._flow2Words", {
              y: 0,
              autoAlpha: 1,
              stagger: {
                amount: 0.3,
                from: "end",
              },
            });
          },
          onLeave: () => {
            gsap.to("._flow2Words", {
              y: -80,
              autoAlpha: 0,
            });
          },
          onLeaveBack: () => {
            gsap.to("._flow2Words", {
              y: 80,
              autoAlpha: 0,
            });
          },
        },
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section>
      <div className="_container h-screen _c_all">
        <div
          ref={wordsWrapper}
          className="text-[5vw]/[5vw] text-white font-rajdani text-center max-w-[70%] flex flex-wrap justify-center gap-x-[1.5vw] uppercase"
        >
          {" "}
          {texts.map((word, i) => (
            <div
              className={clsx(
                "_flow2Words translate-y-20 opacity-0",
                i % 3 && "text-orange-500"
              )}
              key={i}
            >
              {word}
            </div>
          ))}
          <div className="translate-y-20 opacity-0 _flow2Words">
            <Lottie
              animationData={smile}
              play
              speed={1}
              style={{ width: "5vw", height: "5vw" }}
            />
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Flow2;
