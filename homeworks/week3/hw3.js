const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
// eslint-disable-next-line
rl.on('line', function (line) {
  lines.push(line);
});

// 輸入結束，開始針對 lines 做處理
// eslint-disable-next-line
rl.on('close', function() {
// eslint-disable-next-line
  solve(lines);
});

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
/*
hw3：判斷質數

可以利用上一週學過的找因數，直接回傳因數數目是否等於 2 即可，但數字 1 要額外做處理。

或是也可以用迴圈去判斷。
*/
/* eslint-disable */
function solve(lines){
  for(let i=1; i<lines.length; i +=1) {
    console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite');
  }
}

function isPrime(n) {
  // 一行的時候可以偷省略括號，雖然我不知道 eslint 會不會給過就是了XD
  if (n === 1) return false;

  // 找根號以內的數就好，這是數學小知識
  // 先把開根號的值存好，否則每一圈迴圈都會運算一次
  const num = Math.sqrt(n);
  for (let i = 2; i <= num; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}