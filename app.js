// const rect = require('./rectangle');
import rectangle from './rectangle.js';

function solveRect(l, w) {
  rectangle(l, w, (err, rectangle) => {
    if (err) {
      console.log('error', err.message);
    } else {
      console.log(`the area is ${rectangle.area()}`);
      console.log(`the perimeter is ${rectangle.perimeter()}`);
    }
  });
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(3, -5);
solveRect(0, 5);
