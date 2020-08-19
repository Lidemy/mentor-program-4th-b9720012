## HW5 簡答題
-----------------------------------------------------------------------------------------------------------------------------------------

## 1.請以自己的話解釋 API 是什麼？  

__應用程式介面 (Application Programming Interface) ， a.k.a. API 。__  

- 介面很重要，透過介面來溝通。  
- 電腦要透過介面存取和溝通。  

因此可以分為使用 API 和提供 API:  

- 不希望直接被存取資料庫。  
- 定義那些資料要被存取。  
- 例如: 作業系統提供 API、檔案透過 API 讀取。  
- 串接 API = 拿取資料。  
- 提供 API 給他人來網站存取資料或是新增資料。  

__重點: 透過 API 即可讓雙方交換資料。__  

-----------------------------------------------------------------------------------------------------------------------------------------

## 2.請找出三個課程沒教的 HTTP status code 並簡單介紹。  

參考了 [MDN 技術手冊 - HTTP 狀態代碼](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status) 還有 [HTTP 狀態碼 (Status Codes)](https://notfalse.net/48/http-status-codes):  

### 205 重設內容 (reset content)  

- 伺服器接受請求，並且 User 的代理端應重新設置內容。  
- 像是 User 送出表單，結果收到 205 的情況代表瀏覽器希望把表單內容清空。  
- 大概是方便接下來提交新的表單或是美觀要求。  

### 206 部分內容 (partial content )  
- 會產生此狀態是因 User 端送出的範圍標頭 (range header) 將造成下載分流。  
- 將動作 GET 用在範圍請求的情況，像是使 Server 傳輸大型文件的單個頁面。  

### 207 多個狀態 (multi-status, WebDAV)
- 需要多個狀態代碼才能響應傳達有關多種資源的資訊。  
- 用於多個獨立操作來提供不同狀態。  
-----------------------------------------------------------------------------------------------------------------------------------------

## 3.假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。  。
```
http://www.měishí píngtái.com/
"food_restaurant" [
  {
    "id": "1",
    "food_restaurant_name": "Tamsui_A-gei",
    "food_restaurant_classification": "street_food",
    "food_restaurant_address": "Zhenli street., Tamsui Dist., New Taipei City",
  },
   {
    "id": "2",
    "food_restaurant_name": "TNT",
    "food_restaurant_classification": "western_food",
    "food_restaurant_address": "Zhongzheng E. Rd., Tamsui Dist., New Taipei City",
  },
   {
    "id": "3",
    "food_restaurant_name": "Red Castle",
    "food_restaurant_classification": "chinese_food",
    "food_restaurant_address": "Sanmin St., Tamsui Dist., Taipei City",
  },
   {
    "id": "4",
    "food_restaurant_name": "Shenghong Teppanyaki",
    "food_restaurant_classification": "taiwanese_teppanyaki",
    "food_restaurant_address": "Beixin Rd., Tamsui Dist., Taipei City",
  },
   {
    "id": "5",
    "food_restaurant_name": "Hi-Lai-FOODS",
    "food_restaurant_classification": "all_you_can_eat",
    "food_restaurant_address": "Zhongshan N. Rd., Shilin Dist., Taipei City",
  },
],```| 說明 | Method | path | 參數 | 範例 |
|--------|--------|------------|----------------------|----------------|
| 獲取所有餐廳 | GET | /restaurant | _limit:限制回傳資料數量 | /restaurant?_limit=5 |
| 獲取單一餐廳 | GET | /restaurant/:id | 無 | /books/5 |
| 新增餐廳 | POST | /restaurant | name: 餐廳名稱 | :id |
| 刪除餐廳 | DELETE | /restaurant/:id | 無 | 無 |
| 更改餐廳資訊 | PATCH | /restaurant/:id | 變更的項目: 內容 | 無 |取得所有餐廳時：GET /restaurant
```
GET http://www.goodfood.com/restaurant
```獲取其中一個餐廳時： GET /restaurant/:id 
```
GET http://www.goodfood.com/restaurant/1
```新增餐廳：POST /restaurant 
```
POST http://www.goodfood.com/restaurant/
```刪除餐廳：DELETE /restaurant/:id 
```
DELETE http://www.goodfood.com/restaurant/1
```變更餐廳資訊：PATCH restaurant/:id 
```
PATCH http://www.goodfood.com/restaurant/1
```

-----------------------------------------------------------------------------------------------------------------------------------------