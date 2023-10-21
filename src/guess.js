const alphabet = 'abcdefghijklmnopqrstuvwxyz';



function setupGuesses(element, handleGuess) { 
  alphabet.split('').forEach((letter) => {   //loop over each letter in the alphabet string 
    const btn = document.createElement('button'); // create a button element
    btn.innerText = letter; //set its innerText so it displays a letter
    btn.addEventListener('click', (e) => handleGuess(e, letter)); // attatch the given event handler (handleGUess) to the 'click' event
    element.append(btn); // append the button to the given element
  });
}

export default setupGuesses;
