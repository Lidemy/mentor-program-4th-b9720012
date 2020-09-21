## 一、什麼是 DOM？  

---

### 檔案物件模型( Document Object Model )  

- 根據 https://www.w3.org/TR/dom41/ 將 HTML 內寫的 Document 轉換成 Obj 。  
- 是提供一個樹狀結構化表示法，例如 Document 是整個文件，底下有很多節點(標籤)。  
    - 每個節點有繼承關係，像是 `<html></html>` 底下有 ``<head></head>`` 和 ``<body></body>`` 。  
- 用 JS 去拿各個節點(標籤)元素，來對元素做修改，寫了 JS 後跟瀏覽器做溝通來改變視覺上的 UI 呈現。  
    ![](https://i.imgur.com/t9nTblC.png)  
    
- 瀏覽器提供了這個橋梁 ( DOM ) ， 跟 JS 去溝通、改變元素來達到效果。  

---

## 二、事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？  

---

### 捕獲和冒泡  

1. 捕獲階段: `Capturing_Phase`  
    - 事件會由最上面的 Windows 傳到下 ， [Event dispatch and DOM event flow -w3](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) 。  

2. 目標階段: `Target_Phase`  
    - 鎖定目標發生。  

3. 冒泡階段: `Bubbling_Phase`  
    - 將從目標發生的那一層事件，一路傳回到 Windows 。  
    - 先放的 EventListener 先發生，但一樣先捕獲再冒泡。  

***

### 用圖層 part1 來舉例說明    
==存成一個 .html 檔案:==   
```
<!DOCTYPE HTML>

<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>瀏覽器上執行 JS</title>
  <style>
    .outer {
	  width: 500px;
	  height: 200px;
	  background: orange;
	}
	
	.inner {
	  width: 300px;
	  height: 100px;
	  background: green;
	}
  </style>
</head>
<body>
  <div class='outer'>
    <div class='inner'>
	    <button class='btn'>click me</button>
	</div>
  </div>
  <script>
      addEvent('.outer')
	  addEvent('.inner')
	  addEvent('.btn')
	  
	  function addEvent(className) {
	    document.querySelector(className)
		  .addEventListener('click', function() {
		    console.log(className)
		  })
	  }

  </script>
</body>
</html>
```
- 開啟 devtool ，點橘色圖層只會觸發 outer 。  
![](https://i.imgur.com/ZsMHek2.png)  

- 但點下綠色會同時觸發 inner 和 outer 。  
![](https://i.imgur.com/fAOP6Zl.png)  

-  按下 click me 會發現同時觸發 outer 、 inner 和 btn 三者。  
![](https://i.imgur.com/mOIpcYZ.png)  

- 會發現 script 的觸發對應了 div 標籤的層層疊疊順序。  

---

### 不同階段的 EventListener 
==以 圖層 part1 的 .html 修改:==  
```
  <script>
      addEvent('.outer')
	  addEvent('.inner')
	  addEvent('.btn')
	  
	  function addEvent(className) {
	    document.querySelector(className)
		  .addEventListener('click', function() {
		    console.log(className, '捕獲')
		  }, true)
          
          	    document.querySelector(className)
		  .addEventListener('click', function() {
		    console.log(className, '冒泡')
		  }, false)
	  }

  </script>
</body>
</html>
```

- ==第一個參數是事件名稱，如上面的 click。==

- ==第二個參數是 call back function ， 即 ``function()`` 。==

- ==第三個參數可以是一個布林變數。==
    - 如果布林值是 __'false'__ 就會在冒泡階段監聽;  __'true'__ 的話就會放在捕獲階段上監聽。  
    - 如果原本都沒有傳達，預設就是 false 。  

![](https://i.imgur.com/oOs5ASN.png)  
點擊綠色圖案，用 dev tool 查看  __即先捕獲再冒泡。__  

---

## 三、什麼是 event delegation，為什麼我們需要它？  

---

### 直接在 class 的最上層加事件監聽  
==eventDelegation ， 有點像是請人幫忙訂所有人便當的概念:==   

```
<!DOCTYPE HTML>

<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>瀏覽器上執行 JS</title>
  <style>

  </style>
</head>
<body>
  <div class='outer'>
    <button class='add-btn'>add</button>
    <button class='btn' data-value='1'>1</button>
	<button class='btn' data-value='2'>2</button>
  </div>
  <script>
    let num = 3
	
	document.querySelector('.add-btn').addEventListener('click',  
	  function() {
	  const btn = document.createElement('button')
	  btn.setAttribute('data-value', num)
	  btn.classList.add('btn')
	  btn.innerText = num
	  num++
	  document.querySelector('.outer').appendChild(btn)
	})
	
	document.querySelector('.outer').addEventListener('click', 
	  function(e) {
	    if (e.target.classList.contains('btn')) {
	      alert(e.target.getAttribute('data-value'))
	    }
	  })
	
  </script>
</body>
</html>
```
- 這樣蠻有效率，很常用，不用浪費資源 function 在監聽每個事件。  

- 可以處理動態新增的情形，如上面增加按鈕。  

- 透過冒泡機制往上傳，就算底下新增東西，還是可以接到事件。  
---

## 四 、 event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？  

---

### 1. 用了 `preventDefault()` 後都不會有效果
以 圖層 part1 的 .html 修改:  
```
<!DOCTYPE HTML>

<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>瀏覽器上執行 JS</title>
  <style>
    .outer {
	  width: 500px;
	  height: 200px;
	  background: orange;
	}
	
	.inner {
	  width: 300px;
	  height: 100px;
	  background: green;
	}
  </style>
</head>
<body>
  <div class='outer'>
    <div class='inner'>
		<a href='/test'>click</a>
	    <button class='btn'>click me</button>
	</div>
  </div>
  <script>
      addEvent('.outer')
	  addEvent('.inner')
	  addEvent('.btn')
	  
	  window.addEventListener('click', function(e) {
               e.preventDefault()
	}, true)
          
	  function addEvent(className) {
	    document.querySelector(className)
		  .addEventListener('click', function() {
		    console.log(className, '冒泡')
		  }, false)
	  }

  </script>
</body>
</html>
```

- `e.preventDefault()` 只要被 call 出來就不會讓 click 、 link 和表單送出完全不會有效果。  

---

### 2.``stopPropagation()``

- 停止冒泡或是捕獲的方法 ， call function 。 

以 圖層 part1 的 script 修改 .html 檔案:  
```
<!DOCTYPE HTML>

<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>瀏覽器上執行 JS</title>
  <style>
    .outer {
	  width: 500px;
	  height: 200px;
	  background: orange;
	}
	
	.inner {
	  width: 300px;
	  height: 100px;
	  background: green;
	}
  </style>
</head>
<body>
  <div class='outer'>
    <div class='inner'>
		<a href='/test'>click</a>
	    <button class='btn'>click me</button>
	</div>
  </div>
 <script>
      addEvent('.outer')
	  addEvent('.inner')
	  
	  function addEvent(className) {
	    document.querySelector(className)
		  .addEventListener('click', function() {
		    console.log(className, '冒泡')
		  })

	  }
	  
	  document.querySelector('.btn')
	  .addEventListener('click', function(e) {
		  e.stopPropagation()
		  console.log('.btn 冒泡')
		})

  </script>
</body>
</html>
  ```
  
![](https://i.imgur.com/Re8LKrD.png)  

- 按下 click 只會觸發按鈕本身自己的事件。  

- 如果在 window 層直接加入  `e.stopPropagation()` ， 就永遠不會傳遞下去。  

- 在一個按鈕上可以加入不只一個的 EventListener ， 如:  
```
	  document.querySelector('.btn')
	  .addEventListener('click', function(e) {
		  e.stopPropagation()
		  console.log('.btn click 1')
		})
		
	  document.querySelector('.btn')
	  .addEventListener('click', function(e) {
		  e.stopPropagation()
		  console.log('.btn click 2')
		})
```
- 如果只想觸發一個事件就可以用 ``e.stopImmediatePropagation()`` ， 立刻阻止其他所有的 EventListener 傳遞。  

---