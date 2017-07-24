function randomChance(Q) {
  var Win = 0;
  while( Q > 0 ) {
    Win = Win + Math.floor((Math.random()*101);
    Q --;
  }
  return Win;

}

console.log(randomChance(1));
