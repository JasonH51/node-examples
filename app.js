const rect = {
  perimeter: (x, y) => 2 * (x + y),
  area: (x, y) => x * y
};

function solveRect(l, w) {
  if (l <= 0 || w <= 0) {
    console.log(`incorrect values`);
  } else {
    console.log(`the area is ${rect.area(l, w)}`);
    console.log(`the perimeter is ${rect.perimeter(l, w)}`);
  }
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(3, -5);
solveRect(0, 5);
