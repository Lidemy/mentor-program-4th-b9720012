## 1.什麼是 Ajax？ 

- 透過 JS 交換資料，不用換頁。  

### 透過 AJAX (**Asynchronous JavaScript and XML**) - 傳資料 

- 任何非同步跟 Server 交換資料的都可以算是 AJAX 。  
- 早期都用 XML ， 現在比較多用 JSON 格式。  
- 從瀏覽器上的 JS 透過瀏覽器再透過 O.S. 發 Request 到 Server 。  
- 但 Server 回傳的 Response 會回到瀏覽器，但瀏覽器再轉傳給 JS 。 
- 透過這方式可以不重新整理網頁，並更動網頁內容。  

## 2.用 Ajax 與我們用表單送出資料的差別在哪？ 

- 差別在於透過表單形式，每次要求新的資料都要換頁面。 
- 這方法跟 JS 本身無關聯性，是直接代參數。 
- 如果用 GET 的動作，參數會附加在網址上。  
- 登入一般會用 POST 的動作，會在 body 內，不會在網址上被看到。  
- 瀏覽器本身的 html 元素發的 Request ， 瀏覽器接收到的 Response 會直接 Render 出來結果。  
- 因此 Google 回傳的結果就是怎樣的結果，即發一個 Request 到新的頁面。  
  
## 3.JSONP 是什麼？ 

- JSONP (JSON with Padding) 。
- 但是 AJAX  一定受同源政策管理。  
- 有些標籤不受同源政策影響，例如 ``<img src="" />`` ， 跨來源圖片一樣可以載入。  
- 以及 src 可以引進其他 Domain 的 JS 進來 ， `<script src="https://"></script>` 。  
- 也可以用 script 來拿東西 ， 可以在 Client 端宣告一個 function :  
```
<script>
  //定義好 setData 函式後，等網址載入後就會拿到資料。
    function setData(users) {
    console.log(users)
  }
  </script>
  <script src="http://test.com/user.js"></script>
  <!--用網址的頁面，內有 JS 執行一個 function 把 Data 傳出去-->
  <script>
    const request = new XMLHttpRequest()
    const element = document.createElement('script')
    element.src = 'http://test.com/user.js?id=1'
    // 這邊可以代參數 ， server 端可以根據 ↑ 輸出想要的內容。
```
==而Server 端回傳的資料會是 JS Obj 的資料，可能以上面來說會像是這樣:==  
```
// user.js

setData(
  {
    id:1,
    name: 'hello'
  }
)
```

## 4.要如何存取跨網域的 API？ 

- 如有時要去其他 Server 串接資料。 

因此會利用==跨來源資源共用 (Cross-Origin Resource Sharning, CORS)== ， 是個為了解決不同源的進入方法。  

- 因此規範說，如果要跨來源就要在 Response 加個 Header:  

```
Access-Control-Allow-Origin: *
* 表示所有的 Origin 都能存取。  
```

- 如果 Server 沒有加上上述的 Response Header 是無法被存取拿資料的。  

- 那些來源的人可以存取這個 API 或是網站 、 Server 資源。  

來源即是發 request 時，瀏覽器會在 request 上加上 Origin ， 而 Server 那就會根據來源來判斷是否給權限存取; 這個 Response Header 是瀏覽器加上的限制，除非同源、或是 Server 端加上這個  Response Header 才能存取。   

## 5.為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？ 

- ==最主要是為了安全性，所以瀏覽器會有很多跟安全性有關的限制。==  
- 例如無法隨意讀取任意電腦的檔案，這樣才符合安全性的考量。  

- 同源政策和 CORS 只跟瀏覽器有關。  

- 因此如果用 Node.js 寫個 code ， 無論 Server 是否同源有無 Header 都能 Catch 。  

- 脫離了瀏覽器就不會有同源限制和 CORS 。 