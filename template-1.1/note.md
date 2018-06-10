# テンプレート日誌
---
#### 2018/06/09
```
pug index.pug --pretty --watch
```
で監視し続けて変更があればコンパイル

```
coffee script/script.coffee -c
```
でも同様にcoffeeをコンパイルしてくれる..かもしれない


---
#### 2018/06/10
**git使い方**

最初に指定のファイルまで移動し```$ git init```コマンドを使う

次に共有するファイルを選択する。

```$ git add index.html```

次に、
```$ git commit -m "任意のメッセージ```
コミットするメッセージを追加(わかりやすいメッセージで)


```$ git remote add remote(リモート名) http://(リモートのURL)```

これでリモートを繋げる。

```$ git push origin master```

リモートにファイルをアップロード

```$ git pull origin master```


リモートからファイルをダウンロード

---
#### 2018/06/10
***用語集***
ステージする -> ```git add``` のこと

***pugの画像を繰り返し処理***

```pug
each val in [1, 2, 3, 4, 5]
  div= val
  img(src="material/issue_"+val+".png")
```
とすることで画像を繰り返し処理で挿入可能







---
