/*
hw5：聯誼順序比大小

這題要注意的是題目範圍，因為數字太大，所以用 JS Number 會出問題，一個很大的數字被轉成 Number 之後會變成無限大（Infinity），所以比較大小就失去作用了。

因此要自己用字串實作判斷的邏輯：
*/

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
function compare(a, b, p) {
  if (a === b) return 'DRAW';

  // 先假設我們都是比大，所以 A 大就回傳 A，B 大就回傳 B
  // 那如果是比小怎麼辦？把 AB 對調就好
  // 假設 A 是 5，B 是 3，我們的邏輯會回傳 A
  // 但如果是比小，把 AB 對調，就會回傳 B 了
  // eslint-disable-next-line
  if (p == -1) {
/* eslint-disable */
    let temp = a;
    a = b;
    b = temp;
  }

  const lengthA = a.length;
  const lengthB = b.length;

  if (lengthA != lengthB) {
    return lengthA > lengthB ? 'A' : 'B';
  }
  for (let j = 0; j < lengthA; j += 1) {
    if (a[j] == b[j]) {
    // eslint-disable-next-line
      continue;
    }
    return a[j] > b[j] ? 'A' : 'B';
  }
}
// eslint-disable-next-line
function solve(lines) {
  const m = Number(lines[0]);
  for (let i = 1; i <= m; i += 1) {
    // eslint-disable-next-line
    let [a, b, p] = lines[i].split(' ');
    console.log(compare(a, b, p));
  }
}
