'use strict';
import { Calculator } from './calculator.js';

document.addEventListener('DOMContentLoaded', initApp);
function initApp() {
   document.querySelectorAll('.btn-primary').forEach(button => button.addEventListener('click', event => alert(event.target.textContent)));
}

