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
  // 5 200 => ['5', '200']
  const temp = lines[0].split(' ');
  const n = Number(temp[0]);
  const m = Number(temp[1]);
  // eslint-disable-next-line
  for (const i = n; i <= m; i += 1) {
  // eslint-disable-next-line
    if (isNarcissistic(i)) { // 如果 i 是水仙花數
      console.log(i);
    } // 回到題目本身，取出數字;
  }
}
// solve(['5 200'])
// 回傳數字幾位數
function digitsCount(n) {
  // eslint-disable-next-line
  if (n === 0) return 1; // 1, 1e2, 1e3...1e6 ， 限制在已知範圍;
  const result = 0;
  while (n !== 0) {
  // eslint-disable-next-line
    n = Math.floor( n / 10) // 除 10 除了幾次就是幾位數，還要取整數;
    // eslint-disable-next-line
	result++
  }
  return result;
}
// console.log(digitsCount(輸入數字))， 可以確定位數;
function isNarcissistic(n) {
// 對 10 取餘數可取到最後一數，取餘數完 /10 可取得最後一數;
// 幾位數
  const m = n;
  const digits = digitsCount(m);
  const sum = 0;
  while (m !== 0) {
    const num = m % 10;
    // 可改成 Math.pow(num, digits)
    // eslint-disable-next-line
    sum += num**digits // 總和=數字的 n 次方相加;
    // eslint-disable-next-line
    m = Math.floor( m / 10)
  }
  // 最後 n 一定是 0 ;
  // console.log(isNarcissistic(輸入數字)) ， 判斷是不是水仙花數;
  // 可簡化成
  // return sum === n
  if (sum === n) { // 最後 n  一定是 0 會沒辦法做這個判斷 因此會 let num = m;
    return true;
    // eslint-disable-next-line
  } else {
    return false;
  }
}

// 偷吃步的做法
// eslint-disable-next-line
function isNstr(n) {
  // eslint-disable-next-line
  const str = n + '';
  const digits = str.length;
  const sum = 0;
  // eslint-disable-next-line
  for (const i = 0; i < str.length; i++) {
  // eslint-disable-next-line
    sum += Number(str[i]) ** digits;
  }
  return sum === n;
  // eslint-disable-next-line
}