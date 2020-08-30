/* eslint-disable */ // 在該檔案關閉 ESLint
const request = require('request');

request(`https://lidemy-book-store.herokuapp.com/books?_limit=10`, 
  (error, response, body) => {
    if (error) {
    return console.log('抓取失敗', err);
  }
  let data
  try {
    data = JSON.parse(body);
  } catch(error) {
    console.log(error);
    return
  }
  for (let i = 0; i < data.length; i += 1) {
    console.log(`${data[i].id} ${data[i].name}`);
  }
})