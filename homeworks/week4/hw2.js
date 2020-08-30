/* eslint-disable */ // 在該檔案關閉 ESLint
const request = require('request');
const args = process.argv;
const apiUrl = 'https://lidemy-book-store.herokuapp.com';
const action = process.argv[2]
const params = process.argv[3]

switch (action) {
  case 'list':
    listBooks();
    break;
  case 'read':
    readBooks(params);
    break;
  case 'delete':
    deleteBooks(params);
    break;
  case 'create':
    createBooks(params);
    break;
  case 'update':
    updateBooks(params, process.argv[4]);
    break;
  default:
    console.log('Available commands: list, read, delete, create and update');
}

function listBooks() {
  request(`${apiUrl}/books?_limit=20`, (error, res, body) => {
    if (error) {
      return console.log('抓取失敗', error);
	}
    const data = JSON.parse(body)
    for (let i = 0; i < data.length; i += 1) {
      console.log(`${data[i].id}. ${data[i].name}`);
    }
  });
}

function readBooks(id) {
  request(`${apiUrl}/books/${id}`, (error, res, body) => {
    if (error) {
	  return console.log('抓取失敗', error)
	}
    const data = JSON.parse(body)
    return console.log(data.id + '.', data.name)
  });
}

function deleteBooks(id) {
  request.delete(`${apiUrl}/books/${id}`, (error) => {
    if (error) return console.log('刪除失敗');
    return console.log('刪除成功');
  });
}

function createBooks(name) {
  request.post({url: `${apiUrl}/books`, form: {name,}}, (error) => {
    if (error) return console.log('新增失敗', error);
    return console.log('新增成功')
  });
}

function updateBooks(id, name) {
  request.patch({
	url: `${apiUrl}/books/${id}`, 
	form: {
	  name
	}
  }, (error, res) => {
    if (error) {
   	  return console.log('更新失敗', error);
	}
    return console.log('更新成功!?');
  });
}



