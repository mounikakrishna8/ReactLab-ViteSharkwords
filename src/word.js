let word;

function setupWord(initWord, element) {
    word = initWord;
    //console.log(word);
    
    word.split('').forEach(() => {
        let div = document.createElement("div");
        div.setAttribute("class","letter-box");
      return element.prepend(div);
        
    });

}

function isLetterInWord(letter) {
    return word.includes(letter);//word.includes(letter) ? true: false;
}

function revealLetterInWord(letter) {
    const letterBox = document.querySelectorAll('.letter-box');
    word.split('').forEach((wordLetter, Idx)=> {
        if(wordLetter === letter){
            letterBox[Idx].innerHTML = letter;
        }
    });

    let isWordComplete = true;
    for (const el of document.querySelectorAll('.letter-box')) {
    if (el.innerText === '') {
    isWordComplete = false;
    break; // break will exit the loop
  }
}

}


export default setupWord;
export {isLetterInWord, revealLetterInWord};

