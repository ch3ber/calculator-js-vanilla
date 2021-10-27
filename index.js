'use strict';
import { Calculator, Operations } from './calculator.js';

document.addEventListener('DOMContentLoaded', addEventListeners);

function addEventListeners() {

   // botones numericos
   document.querySelectorAll('.btn-primary')
      .forEach(button => button.addEventListener('click', event => calculator.addNumerToDisplay(event) ));

   // botones de operciones
   document.querySelectorAll('.btn-secondary')
      .forEach(button => button.addEventListener('click', () => calculator.toggleSymbol() ));

   // boton de resolver
   document.querySelector('.btn-success')
      .addEventListener('click', () => calculator.showResult() );

   // boton de borrar un numero
   document.querySelector('.btn-danger')
      .addEventListener('click', () => calculator.deleteNumber() );
}

const calculator = new Calculator('display');
const operations = new Operations();
