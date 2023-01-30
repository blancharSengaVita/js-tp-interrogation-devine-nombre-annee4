

function generate(min, max){
  return Math.floor((Math.random() * (max - min + 1)) + min)
  //return a random integer between the min and the max include
}

console.log(generate(4, 8));