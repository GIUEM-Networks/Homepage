import "./css/app.styl";
import { effect } from "./config";
import { Word } from "./js/word";

window.onload = () => {
  const word = new Word(document.querySelector(".title"), effect.options);
  word.show(effect.show);
};
