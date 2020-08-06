// hw4：判斷迴文

// 把字串拿去跟 reverse 之後的比較，看是不是一樣即可。

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
// eslint-disable-next-line
function solve(lines) {
  const str = lines[0];
  // eslint-disable-next-line
  if (reverse(str) === str) {
    console.log('True');
  } else {
    console.log('False');
  }
}

function reverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return result;
  // eslint-disable-next-line
}