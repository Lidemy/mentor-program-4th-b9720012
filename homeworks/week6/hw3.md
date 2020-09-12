
# 1. 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。  
- 粗體字: `<b>文字</b>` 文字格式即文字，能標示粗體字。  

- `<bgsound />` ;  	src：音樂檔路徑 ; loop：重播次數 ; infinite : 重複播放，例如 : `<bgsound src="./music.mp3" loop="5" />` 表示目錄下的音樂檔案，撥放次數五次循環。  

- 文字區域: `<textarea></textarea>` ; name : 名稱(可重複) ， id : 名稱(不可重複) ; cols : 行數 ; rows : 列數，例如 : `<textarea name="text" cols="30" rows="5"></textarea>` 這是一個有著 30 行和 5 列的文字區域方塊，可拉伸。  

參考資料: [HTML標籤列表](http://web.thu.edu.tw/hzed/www/tag.htm)    

---------------------------------------------------------------------

# 2. 請問什麼是盒模型（box modal）？  

## 甚麼是盒模型 ?

HTML 的每個元素都可以看作是盒子，用 CSS 樣式來調整盒子。  

- 但要注意 padding 和 border 會往外擴張，增加 pixel ， 會影響到其他元素。  

- 例如一個 ``width: 200px;`` 和 ``height: 100px;`` 的 box 加了 ``border: 5px solid black;`` 就會變成 width 210px 和 height 110 px 。  

- 很多時候要固定寬高，而不是往外增長，所以會調整 box-sizing 。  

---------------------------------------------------------------------

## box-sizing
- ``box-sizing: content-box;`` 像是本身 content 的寬高維持不變，不考慮內邊距（padding）和邊框（border）。  

- ``box-sizing: border-box;`` 像是本身 content 的會加上內邊距（padding）和邊框（border）來維持所要的寬和高的 pixel 。  

- 如 ``width: 200 px;`` 和 ``height: 100px`` ， 使用 ``box-sizing: border-box;``  會將 content 的寬和高降成 170px 和 70px 。  
![](https://i.imgur.com/CSHWgxR.png)  

---------------------------------------------------------------------  
參考資料:  

[MDN - The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)  

[box-sizing - MDN Web Docs - Mozilla](https://developer.mozilla.org/zh-TW/docs/Web/CSS/box-sizing)  

--------------------------------------------------------------------- 

# 3. 請問 display: inline, block 跟 inline-block 的差別是什麼？什麼時機點會用到？  

## display block element  

- 預設就是 div 、 h1 、 p 標籤，寬高、內邊距 (padding) 和邊框 (margin) 怎麼調整皆可。  

- 通常自己佔滿一整行，佔好占滿，不會將下行的 div 往上遞補。  

- ``display: block;`` 一行放一個元素。  

---------------------------------------------------------------------

## display inline element  

- 如: span 、 a 標籤，怎麼調整寬高都沒用，寬高都會根據內容來顯示。  
 
- 但調整外邊距 (margin) 則會影響左右的外邊距，但上下外邊距不影響。  
  - 外邊距調高，會造成像是跟其他元素的間距越來越大。
![](https://i.imgur.com/UO1TTfm.png)  

- 要注意的是，調整內邊距 (padding) 左右也會讓其他元素的間距變大。  
  - 但調整內邊距 (padding) 上下則是不會影響其他元素位置的變動。  
  - 但元素(背景 background 和邊框 border )高度會拉伸。  

---------------------------------------------------------------------

## display inline-block element  
- 把 inline 和 block 的優點結合起來，如: button 、 input 和 select...。  
  - 對外像 inline 可併排。  
  - 對內像 block 可調整各屬性。  

- ``display: inline-block;`` 讓元素併排。  

---------------------------------------------------------------------

# 4. 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？分別各舉一個會用到的場合  

## Static  
__排版時要將元素放到位。__ 
- 最基本的網頁預設排版方式，例如 ``display: block;``  。  

  - 跟你說從上排到下這樣。  

![](https://i.imgur.com/OnRQTH4.png)  

- 而 inline 或 inline-block 就會從一行開始畫，由左排到右。  

---------------------------------------------------------------------

## Relative

- 相對定位，會改變自己的位置，而不會影響到其他元素。  

套用 .html 格式:  
```
<!DOCTYPE HTML>

<html>
　<head>  
    <meta charset="utf-8" />  
　　<title>網頁製作教學</title>  
　　<link rel="stylesheet" href="./style.css" />
　</head>  
　<body>  
　　body 間: 為主要語意所在，網頁主要顯示的部分。
    <div class="wrapper">     
      <div class="box">Box1</div>
	  <div class="box">Box2</div>
      <div class="box">Box3</div>
	</div>
　</body>  
</html>
```



如套用 CSS 格式:  
```
body {
    margin: 0;
}

.box {
    background: orange;
    width: 100px;
    height: 100px;
    margin: 10px;
}

.wrapper div:nth-child(2) {
    position: relative;
    top: 20px;
}
```

- 就會造成 Box2 往下移動，其設定的方向皆為反向移動。  

---------------------------------------------------------------------

## fixed 固定住

__相對於瀏覽器的窗口作定位，不管怎麼滾動都在同位置。__  

如套用 CSS 格式:  
```
body {
    margin: 0;
}

.box {
    background: orange;
    width: 300px;
    height: 100px;
    margin: 10px;
    display: block;
}

.wrapper div:first-child{
    position: fixed;
    width: 100px;
    background: red;
    bottom: 100px;
    right: 0px;
}
```
- viewport 根據你看得到的地方定位。  
- 所以 Box1 會被固定在你看到的右下角位置。  

---------------------------------------------------------------------

## absolute 絕對定位

__需要有參考點__  

存 .html 格式檔案:  
```
<!DOCTYPE HTML>

<html>
　<head>  
    <meta charset="utf-8" />  
　　<title>網頁製作教學</title>  
　　<link rel="stylesheet" href="./style.css" />
　</head>  
　<body>  
　　body 間: 為主要語意所在，網頁主要顯示的部分。     
    <div class="box">Box1</div>
	<div class="box">
      <div class="box-inner">
         Box2
      </div>
      <div>
         123
      </div>
    </div>
    <div class="box">Box3</div>
　</body>  
</html>
```
如套用 CSS 格式:  
```
body {
    margin: 0;
}

.box {
    background: orange;
    width: 300px;
    height: 100px;
    margin: 10px;
    display: block;
    position: relative
}

.box-inner {
    position: absolute;
	top: 10px;
    right: 10px;
}
```

- Box2 的字會對參考點定位在 body ``top: 10px; right: 10px;`` 處。  

- 因此要限制字體在 Box 內，所以需要用 `position: relative;` 。  

![](https://i.imgur.com/gYV888u.png)  

- 參考點必須用 box-inner 往上找不是 static 的地方作絕對定位。  

-  因此通常會基於不是 static 的地方，如 `<div class="box">` 作相對定位 `position: relative;` 。  

- 用了絕對定位後，第二個元素會往上遞補到第一個元素，假裝第一個元素不存在。  

- 會脫離原本的正常排版流程。  

---------------------------------------------------------------------  
參考資料:  

[關於position 屬性 - CSS](https://zh-tw.learnlayout.com/position.html)  

[CSS relative? absolute? 傻傻分不清楚 - iT 邦幫忙::一起幫忙 ...](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiI58zhhs7rAhU5yYsBHaVxCbsQFjABegQIBRAB&url=https%3A%2F%2Fithelp.ithome.com.tw%2Farticles%2F10212202&usg=AOvVaw2xTg7j6nC8--E94ngcdqYI)  

[MDN - position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)  

---------------------------------------------------------------------