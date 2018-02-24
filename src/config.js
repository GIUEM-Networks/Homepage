import anime from "animejs";
import { randomBetween } from "./js/utils";

export const effect = {
  options: {
    shapesOnTop: true,
    shapeColors: ["#FD74FF", "#3771FC", "#7C5CE4", "#542A95", "#ACC7FE"],
    shapeTypes: ["rect", "polygon"],
    totalShapes: 1
  },
  hide: {
    lettersAnimationOpts: {
      duration: () => anime.random(800, 1000),
      delay: () => anime.random(0, 80),
      easing: "easeInOutExpo",
      opacity: 0,
      translateY: "300%",
      rotateZ: () => anime.random(-50, 50)
    },
    shapesAnimationOpts: {
      duration: 350,
      easing: "easeOutExpo",
      translateX: t => [t.dataset.tx, anime.random(-25, 25)],
      translateY: t => [t.dataset.ty, anime.random(-25, 25)],
      scale: 1,
      rotate: 0,
      opacity: {
        value: 0,
        duration: 200,
        easing: "linear"
      }
    }
  },
  show: {
    lettersAnimationOpts: {
      duration: 800,
      delay: () => anime.random(0, 75),
      easing: "easeInOutQuart",
      opacity: [0, 1],
      translateY: ["-300%", "0%"],
      rotate: () => [anime.random(-50, 50), 0]
    },
    shapesAnimationOpts: {
      duration: 3200,
      easing: "easeOutExpo",
      translateY: t => {
        const ty = anime.random(-300, 300);
        t.dataset.ty = ty;
        return [anime.random(-25, 25), ty];
      },
      scale: t => {
        const s = randomBetween(1.5, 2);
        t.dataset.s = s;
        return [s, s];
      },
      rotate: () => anime.random(-45, 45),
      opacity: {
        value: [0, 0.9],
        duration: 600,
        delay: 300,
        easing: "linear"
      }
    }
  }
};
