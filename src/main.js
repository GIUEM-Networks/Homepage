import "./css/app.styl";
import { effect } from "./config";
import { Word } from "./js/word";

window.onload = () => {
  const word = new Word(document.querySelector(".title"), effect.options);
  let isShow = false;
  function toggleShow() {
    if (isShow) {
      word.hide(effect.hide);
    } else {
      word.show(effect.show);
    }
    isShow = !isShow;
  }
  toggleShow();
  // setTimeout(toggleShow, 5000);
};
