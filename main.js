import "./style.css";
import getRandomWord from "./src/randomWord.js";
import setSharkImage from "./src/sharkImage.js";
import setupWord from "./src/word.js";
import { isLetterInWord, revealLetterInWord } from "./src/word.js";
import setupGuesses from "./src/guess.js";

document.querySelector("#app").innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;



const word = getRandomWord();
const initSharkwords = () => {
  let numWrong = 0;

  setSharkImage(document.querySelector("#shark-img"), numWrong);
  setupWord(word, document.querySelector("#word-container"));

  const handleGuess = (guessEvent, letter) => {
    // console.log(`guessEvent is: ${guessEvent}`);
    // console.log(`letter is: ${letter}`);
    const button = guessEvent.target;
    button.setAttribute("disabled", true);

    if (isLetterInWord(letter)) {
      revealLetterInWord(letter);
    } else {
      numWrong += 1;
      setSharkImage(document.querySelector("#shark-img"), numWrong);
    }
  };
  setupGuesses(document.querySelector("#letter-buttons"), handleGuess);

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
  //console.log(isLetterInWord(word[0]), '(should be true)');
  //console.log(isLetterInWord('1'), '(should be false)');
};

const isWordComplete = Array.from(document.querySelectorAll('.letter-box')).every(
  (el) => el.innerText !== '',
  //document.innerText = 'You Win!'
);

initSharkwords();
console.log(word);
revealLetterInWord(word[0]);
