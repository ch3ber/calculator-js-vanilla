'use strict';

export class Calculator {
   constructor(currentDisplay, previousDisplay) {
      this.currentDisplay = currentDisplay;
      this.previousDisplay = previousDisplay;
      this.currentOperation = undefined;
      this.previousNumbers = '';
   }

   reset() {
      this.currentDisplay.innerText = '0';
      this.previousDisplay.innerText = '0';
      this.currentOperation = undefined;
      this.previousNumbers = '';
   }

   deleteNumber() {
      if (this.currentDisplay.innerText.length === 1) {
         this.currentDisplay.innerText = 0;
      } else {
         this.currentDisplay.innerText = this.currentDisplay.innerText.toString().slice(0, -1);
      }
   }

   solve() {
      if (this.currentDisplay.innerText.toString() === '0') return;
      if (this.currentOperation === undefined) return;
      const currentNumbers = parseInt(this.currentDisplay.innerText);
      let answere;
      switch (this.currentOperation) {
         case '+':
            answere = this.previousNumbers + currentNumbers;
            break;
         case '-':
            answere = this.previousNumbers - currentNumbers;
            break;
         case '/':
            answere = this.previousNumbers / currentNumbers;
            break;
         case '*':
            answere = this.previousNumbers * currentNumbers;
            break;
      }
      this.previousNumbers = 0;
      this.currentDisplay.innerText = answere;
      this.previousDisplay.innerText = '0';
      this.currentOperation = undefined;
   }

   setOperation(character) {
      if (this.currentDisplay.innerText.toString() === '0') return;
      this.currentOperation = character.toString();
      this.previousNumbers = parseInt(this.currentDisplay.innerText);
      this.addCharacterToDisplay(character);
      this.previousDisplay.innerText = this.currentDisplay.innerText.toString();
      this.currentDisplay.innerText = '0';
   }

   addCharacterToDisplay(character) {
      parseInt(this.currentDisplay.innerText) === 0
         ? this.currentDisplay.innerText = character.toString()
         : this.currentDisplay.innerText += character.toString();
   }
}

