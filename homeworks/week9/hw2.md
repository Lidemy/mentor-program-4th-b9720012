## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
### 可能的 Table schema 設定 
基本資料表，例如: 
- 會對 username (ID) 做限制，例如型態設成 VARCHAR ， 長度/值限制在 20 ， 超過不能存入 ， VARCHAR 會依照資料的長度變更其儲存空間大小。
- content (ID) ， 型態會設成 TEXT ，TEXT 不太需要管長度，不是 Unicode ， 長度最大達 2^16 -1 大小，文檔再大一點可能會選 LONGTEXT 。

***

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
1. 像是員工通行證，網站用 Cookie 作為在使用者的瀏覽器中儲存資料，用來儲存帳號密碼，但網站所能儲存並使用的資料，只有使用者在表單輸入過的內容；網站不能自行拿取使用者沒有提供過的資料，也不行隨便未經許可存取電腦中的檔案。  

2. 瀏覽器接收 Set-Cookie 命令，會新增一個 Cookie 在本機，並記錄其所在網域、網址、過期時間和安全連線設定。 
        
3. 當瀏覽器發出 HTTP Request 給 server ， 會檢查合格的 Cookie (網域、網址、過期時間、安全連線)，如有第一次造訪網站的話 ， Server 會把 Cookie 儲存在 HTTP Request 指令的 Cookie" Header 中。 

***

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
- Cookie 存在瀏覽器內，如果他人未經許可取得 Cookie 是相當危險的，可以在憑證到期前利用做登入存取的動作。  

- 設定登入後可以轉換到留言板的頁面，但如果直接輸入留言板的位址就直接進入拿取資料會有資安的問題。  
