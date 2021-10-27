'use strict';
export class Calculator {
   constructor(displayId, isFirstNumber, currentSymbol, newSymbol) {
      this.isFirstNumber = isFirstNumber;
      this.currentSymbol = currentSymbol;
      this.newSymbol = newSymbol;
      this.displayId = displayId;
   }

   deleteNumber() {
      const display = document.getElementById(this.displayId);
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
      const display = document.getElementById(this.displayId);
      display.innerText = result;
   }

   toggleSymbol() {
      return this.currentSymbol = this.newSymbol;
   }

   addNumerToDisplay(event) {
      const display = document.getElementById(this.displayId);
      (display.innerText == 0)
         ? display.innerText = event.target.textContent
         : display.innerText += event.target.textContent;
   }

}

export class Operations {
   constructor(firstNumber, secondNumber) {
      this.firstNumber = firstNumber;
      this.secondNumber = secondNumber;
   }

   add() {
      return this.firstNumber + this.secondNumber;
   }
   subtract() {
      return this.firstNumber - this.secondNumber;
   }
   divide() {
      return this.firstNumber / this.secondNumber;
   }
   multiply() {
      return this.firstNumber * this.secondNumber;
   }
}

