const genkiFunction = function(number){
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n=1; n<=number; n++) {
    if (n % 15 === 0){
      console.log("Fizzbuzz")
    } else if (n % 5 === 0){
      console.log("buzz")
    } else if (n % 3 === 0) {
      console.log("fizz")
    } else {
      console.log(n)
    }
  }
}