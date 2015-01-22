var evenFibNums;
evenFibNums = function(num) {
  var currentNum = 1, previousNum = 0, nextNum = 0, temporaryNum;

    while(currentNum < num) {
      temporaryNum = currentNum;
      currentNum += previousNum;
      previousNum = temporaryNum;

      if(currentNum % 2 === 0) {
        nextNum += currentNum;
      }
    }
    return nextNum
}

evenFibNums(4000000);
