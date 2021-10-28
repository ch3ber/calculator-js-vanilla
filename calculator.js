'use strict';

export class Calculator {
   constructor(displayId) {
      this.display = document.getElementById(displayId);
      this.numbersForOperations = [];
   }

   deleteNumber() {
      if (display.innerText == 0) return;
      if (display.innerText != 0) {
         if (display.innerText.length == 1) {
            display.innerText = 0;
         } else {
            display.innerText = display.innerText.slice(0, -1);
         }
      }
   }

   showResult() {
      try {
         display.innerText = eval(display.innerText);
      } catch (e) {
         display.innerText = 'Error'
         setTimeout(() => {
            display.innerText = 0;
         }, 1000)
      }
   }

   addCharacterToDisplay(event) {
      if (display.innerText != 0) {
         display.innerText += event.target.textContent;
      }
      if (display.innerText == 0) {
         display.innerText = event.target.textContent;
      }
   }
}

