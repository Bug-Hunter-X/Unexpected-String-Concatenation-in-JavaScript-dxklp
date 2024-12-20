function foo(a, b) {
  const numA = typeof a === 'number' ? a : Number(a);
  const numB = typeof b === 'number' ? b : Number(b);
  
  if (isNaN(numA) || isNaN(numB)) {
    return NaN; //Or throw an error
  }
  return numA + numB;
}

console.log(foo(1, '1')); // Output: 2
console.log(foo(1, 2)); // Output: 3
console.log(foo('a', 2)); //Output: NaN 