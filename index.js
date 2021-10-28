'use strict';

import { Calculator } from './calculator.js';

document.addEventListener('DOMContentLoaded', addEventListeners);

function addEventListeners() {

   // botones numericos
   document.querySelectorAll('.btn-primary')
      .forEach(button => button.addEventListener('click', event => calculator.addCharacterToDisplay(event.target.innerText) ));

   // botones de operciones
   document.querySelectorAll('.btn-secondary')
      .forEach(button => button.addEventListener('click', event => calculator.setOperation(event.target.innerText) ));

   // boton de resolver
   document.querySelector('.btn-success')
      .addEventListener('click', () => calculator.solve() );

   // boton de borrar un numero
   document.querySelector('.btn-warning')
      .addEventListener('click', () => calculator.deleteNumber() );

   // boton de resetear el display
   document.querySelector('.btn-danger')
      .addEventListener('click', () => calculator.reset() );
}

const display = document.getElementById('display');
const previousDisplay = document.getElementById('displayPrevState');
const calculator = new Calculator(display, previousDisplay);
