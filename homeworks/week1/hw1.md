# hw1：交作業流程

--------------------------------------------------------------------------------------------------------------------------------
## 請用文字一步步敘述應該如何交作業。

## Answer:

需先上完 CMD 101 和 GIT 101 才能寫作業和交作業 。

## 首先要設定 Git Hub 專案

GitHuba classroom 網址：https://classroom.github.com/a/SbDvk2VA
Creating you repository ， 可以將這個 [Lidemy 的課綱當作專案](https://github.com/b9720012/mentor-program-4th-b9720012 ) ， 
這是交作業的模板。

從 GitHub Classroom 會從課綱 clone 一份到我的帳號，並且[在這邊寫作業](https://github.com/Lidemy/mentor-program-4th-b9720012) ， 
就可以設定好專案 。

--------------------------------------------------------------------------------------------------------------------------------

## 交作業

確認我在 mentor-program-4th-b9720012(master)  專案 (repository) 下 ，
需在相對應的資料夾下寫作業 ， 如作業week1 就在 week1 的資料夾內 。

1. 寫作業前要永遠先新開個 branch ，如指令 `git branch week1` 或 `git checkout -b week1` (開個 branch 的同時並切過去) 。 
2. 接著移動過去 week 1 專案(資料夾)， 用指令 `git checkout week1` 切一個 branch 出來 ， 在新的這個 branch week1 寫作業 。 
3. 接著用 `git status` 看改動是否成功 ， 再用 `git diff` 看改動了甚麼 ， 好了後用 `git status` 再確定一次 。
4. 好了後如果有新增檔案記得把檔案加入 commit; 指令: `git add .` 後再 commit; 如果只是修改檔案內文字則可以直接用 Git 指令:
   `git commit -am "week1 完成"` 。 
5. 好了後再把 Local 本地端的 week1 branch repository 用指令: `git push origin week1` 推上去 GitHub 。
6. 接著 在 GitHub 上確認作業沒問題後 ， 點 Pull request 按鈕將 week1 給 Compare & pull request 。
7. 再來上學習系統 → 新增作業: 第幾週 & PR連結(貼 PR 那頁的網址貼上去) → 送出 。 
8. 交完作業後待助教改完後 ， 助教會按下 Merge (合併) ， 而因為 GitHub 上已經 merge ， 所以我要回 本機 Local ， 
   將 GitHub 上我的 Master repository 用指令: `git pull origin master` 拉下來 ， 好了後再用 `git branch -d week1` branch 給刪除 。
9. 交作業大功告成~ !!!