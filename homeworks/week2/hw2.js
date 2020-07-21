/*
hw2：首字母大寫

給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。

capitalize('nick')
正確回傳值：Nick

capitalize('Nick')
正確回傳值：Nick

capitalize(',hello')
正確回傳值：,hello
*/

/*
// 內建函式的寫法:
function capitalize(str) {
  for(var i = 0; i<str.length; i++) {
  	if(str[i] >='A' && str[i] <='Z') { // 代表大寫字母;
  	  
  	  return str + '' // i 表示 index;
  	} else {
  	  return str[i].toUpperCase()+(str.slice(1))
  	}
  } 
  return str
}

var a = capitalize('hello')
console.log(capitalize(a));
*/

function capitalize(str) {
  for(let i=0; i<str.length; i++) {
  	let ans=''
  	if (str[i] >= 'a' && str[i] <= 'z') {
  		ans += String.fromCharCode(
        str.charCodeAt(i) - 32
      )
    return  ans[i]+(str.slice(1))
    }
    if (str[i] >= 'A' && str[i] <= 'Z') {
      return str + ''
  } else  {
  		
    return  str+''
      	
  }
}
return str+''
}


console.log(capitalize('hello'))