# hw4：跟你朋友介紹 Git

--------------------------------------------------------------------------------------------------------------------------------

## Answer:

## 如何用 Git 版本控制管理笑話集 ？

如果有很多的笑話收藏 (檔案) 、 笑話版本、 笑話範本  (系統檔案) ， 就可能要把笑話做一個有系統的管理 ， 這時候可能就是單純的命名資料夾作衍生 ， 
像是加入不同笑話的版本控制 ， 假設我今天命名了笑話 V2 ， 但又做了 V3 或是在網路上看到同一個笑話的 V3 ， 但內容就不一樣 ， 也不能用資料夾的流
水號個別控制 ， 但如果兩個人都用亂數作為資料夾名稱絕對不會重複 ， 那大家的版本就不會衝突 ， 我要怎麼知道哪個是最新的版本和順序 ， 就可能說好創
一個資料夾是 new ， 和用命名順序管理 ， 這就是 Git 的類似概念; 而 Git 就是有效可以控管這些笑話版本專案管理軟體 。

## 如何基礎的使用 Git　指令 ?

最一開始會用　`git init`　， 下指令開始對這個笑話專案做版本控制　，　輸入後會出現 Initialized empty Git repository in `路徑`　， 同時你在
的笑話資料夾內會多隱藏的 git 資料夾　（directory) ， 會把需要的東西存在隱藏的 git 內 ， 也可以用 `rm -r .git` 刪掉名為 .git 隱藏資料夾 。

而 `git status` 可以看狀況; `git add 檔案名稱` 決定是否加入版本控制 ， 如指令 `git add 檔案名稱` ， 則會把笑話檔案 staged 並加入版本控制， 
有修改過還沒正式加入新版本; Untracked files: 則是還未被加入版本控制的, 如果用 `git rm --cached <file>...` to unstage; `git add.` 會把所
有笑話檔案加入版本控制 。

`git commit` 則用來新建一個笑話版本 ， (一開始要 `git config --global user.name "your name"`  和 
`git config --global user.email "youremail"` ， 來設定帳號和密碼) 。

而輸入 `git commit -m` (m for messager) 會顯示出 files changed (表示這些資料夾被 commit) ; 這時再用 `git status` 下去看會發現原來的四個
笑話 files:

![](https://i.imgur.com/ZcBpFGO.png)

已被 commit 加入笑話版本控制如下圖:
![](https://i.imgur.com/YBuWFbw.png)

`git commit -am"數字或分類"` 會把所有已經修改過文字的檔案加入 stage 區 ， 但新建立的笑話檔案則不會被加入 。

--------------------------------------------------------------------------------------------------------------------------------

## 用 Git 基礎指令實作建立笑話專案

1.     xxxx@USER MINGW64 ~/downloads/test_git_demo 下 
     `git init` 指令 ， 使 test_git_demo 成為 (master) 被 Git 所控制。

2. 接著建立 `vim .gitinore` 來避開我不要加入到版本控制的笑話檔案 (例如在檔案內地一行寫上 `test`, 則避開 `test` 這個檔案) ， `.gitignore` 
本身也要加入版本控制 ， 如可以用  `git add .` 將所有笑話檔案加入版本控制 (如果在 `git add .` 前用 `git commit -am ""` 是不會包含所新增
笑話檔案 ， 即沒有任何東西在 stage 區) 。

3. `git commit -am "你的類別"` (-a; -am都行)  
![](https://i.imgur.com/yoYwcC4.png)  
如圖 ， 已加入三檔案 ， 可再用 `git status` 看狀況。

4. 這時建立了就已經建立了一個新版本 ， 可以用 `git log` 來check it out, 如圖為第一個版本 ↓    
![](https://i.imgur.com/BqMtbed.png)  
以此類推版本一到版本十的笑話專案控制 。  

5. 專案建立後 ， 如果有新笑話檔案則記得用 `git add .` 或 `git add 檔案名稱` 把檔案加入版本控制 ↓
![](https://i.imgur.com/xVsXTPF.png)

6. 專案建立後 ， 如果是改現有的笑話檔案(在檔案內修東西) ， 且要建立另一個或是第二個版本的專案 ， 一樣也是用 `git commit -am "你的類別"` 
(-a; -am都行) 將檔案加入版本控制; 且這時候可以用 `git diff` 指令看修改檔案前後差別 ↓
![](https://i.imgur.com/cYiKOPM.png)

7. 如果笑話專案建立後 ， 增加笑話檔案 ， 且只用 `git commit -am "你的類別"` 指令 ， 他會跟你說檔案還沒 staged, 你必須先用 `git add` 
指令加入你修改的檔案 ↓   
![](https://i.imgur.com/wgl4ySt.png)
![](https://i.imgur.com/q5UkRzS.png)

8. 如果只在檔案內修完東西(新增幾行字) ， 可以用 `git commit -am "新增名稱"` 直接加入版本控制 ↓
![](https://i.imgur.com/E2R5eCH.png)

9.  `git checkout` 可以在不同笑話版本間切換 ， 假設你今天 用 commit 建立專案笑話版本從 版本一至十 ，可以搭配
`git log` or `git log --oneline` (只顯示commit的前面七碼) 使用 ， 在版本間切換:  
![](https://i.imgur.com/eBJGKgW.png)

--------------------------------------------------------------------------------------------------------------------------------

## 在 GitHub 上作笑話版本共享專案吧
但如果想贏得笑話冠軍 ， 那你的獨家笑話可能需要創一個 private (要付費的)專案喔。

Git 是版本控制的程式 ， Git Hub 最主要是可以放 Git Repository 的地方 ， 因此可以把笑話放在上面作控制 。

--------------------------------------------------------------------------------------------------------------------------------

## GitHub 基本功能
顯示你有幾個笑話檔案之類的:  
![](https://i.imgur.com/9SgyBbx.png)  

顯示你有幾個 Branch:  
![](https://i.imgur.com/iYdfLu2.png)  

點 Commits 後 ， 最右邊的編號可以看到這個 Commit 改了甚麼東西 。

點檔案後可以看到是誰最後修訂程式碼。

issues: 對專案有問題可以提出、留言、討論的地方 。

Explore: 可以看他人的專案 。

--------------------------------------------------------------------------------------------------------------------------------

## 上傳你的笑話專案到 GitHub
新建 Repository:  
![](https://i.imgur.com/nySwSgM.png)

Create a new repository 底下會有 Repository name 要你輸入專案名稱 。  

Description: 要你為這個笑話專案描述 。  

Private 選項是要收費的 ， 因此可選 Public 。  

都好了後可以 Create repository(創建專案) 。  
![](https://i.imgur.com/DwpXjdQ.png)

...or create...: 還沒有建立專案的話 ， 可以照著步驟做 。  

...or push...: 有專案(repository)的話 ， 可以用  `git remote add origin https://github.com/帳號ID/test.git` 直接遠端加入一個專案到
GitHub 上 。  
 `git push -u origin master` 把本地專案推上去 "-u" 表示設定到 origin master 。  
 
 設定好後會推上去你在 GutHub 的專案(推上去前會要登入你的帳號密碼) ， 如下:  
 ![](https://i.imgur.com/FczTISi.png)
 
 推上去後可以去你的 GitHub 專案位置看一下同步狀況:  
 ![](https://i.imgur.com/1HKKRml.png)  
檔案檔案都有出來則表示成功 。

--------------------------------------------------------------------------------------------------------------------------------

## Git Push !
### 修改檔案後如何同步到 GitHub ?
假設你今天修改了一個笑話檔案叫 "code.js" ， 用 `git status` 查看會發現它還沒被 staged ，於是你 趕緊用`git commit -am "GitHub"` 指令去
commit 它:    
![](https://i.imgur.com/GKSCbca.png)

再用指令 `git push -u origin master` "推"上 GitHub:  
![](https://i.imgur.com/WjfQaHC.png)

好了後發現檔案在新增了 ， 並且於修改的時間點上點 GitHub ， 或最右邊的 ID 可以進去看修改了些甚麼:  
![](https://i.imgur.com/VUSPNRj.png)

--------------------------------------------------------------------------------------------------------------------------------

### 如何從 GitHub 線上將 Repository pull 下來 ?
在 GitHub 上也可以改笑話檔案 ， 點你欲修改的笑話檔案旁會有個鉛筆 ， 進行修改:
![](https://i.imgur.com/JctMv7L.png)

修改好後 ， GitHub 會幫你產生 Commits ， 同時你也可以描述這個檔案有甚麼更動 ， 好了後按下 Commit changes ~
![](https://i.imgur.com/VToULwh.png)

同時可以在 GitHub 上看到你修改過的檔案 ， 會顯示 Update:
![](https://i.imgur.com/KqjTPPa.png)

此時也因為本地自己電腦的檔案並不是最新的 ， 因此需要從 GitHub Pull 下來!  
使用指令 `git pull origin master` 將檔案"拉"回本地電腦 ， 如果有衝突就解決！  
![](https://i.imgur.com/8iHBzdX.png)

--------------------------------------------------------------------------------------------------------------------------------

### 笑話衝突解決法:
假設你今天在 GitHub 有人跟你本機的電腦都修改了同一份笑話檔案 ， 而你在本機電腦操作 CLI 並把笑話檔案"拉"回來的時候發現:
![](https://i.imgur.com/ztbmNgB.png)

有個衝突(CONFLICT)產生 ！ 這時候就可以用 `vim 你修改的檔案名稱` 去看哪裡出了問題:
![](https://i.imgur.com/TH7Aqtl.png)
假設我將第六行修改成這樣: " You:yooooooooooo~ 123123456456 " 。

解決後記得合併 Branch: 用 `git add 名稱` 將檔案 staged 再用 `git status` 看狀況 ， 確定沒問題後 ，   
將檔案加入專案 `git commit -am "專案名稱"` 並將檔案"推"上 GitUub `git push origin master`
![](https://i.imgur.com/NaZL9TK.png)  
如此在 GitHub 上看見的檔案即為你剛剛修改好後的檔案　！