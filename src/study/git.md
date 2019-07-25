# Git

## 学習参考

- [LearnGitBranching](https://k.swd.cc/learnGitBranching-ja/)

## クローン(clone)

リポジトリを複製する。

```bash

git clone [リポジトリ]              // 直下
git clone [リポジトリ] [ディレクトリ] // ディレクトリ指定

```

## ブランチ(branch)

1つのプロジェクトから分岐させることにより、プロジェクト本体に影響を与えずに開発を行える機能。  
現行のバージョンのプロジェクトから枝分かれさせて他の作業を行うことができる。

### ブランチの作成

```bash

git branch [ブランチ名]

```

### ブランチ一覧確認

*印が現在のブランチ

```bash

git branch
* master
  topic

```

### ブランチの移動(checkout)

ブランチを変更する。

```bash

git checkout [ブランチ名]

```

### ブランチの削除

```bash

git branch -d [ブランチ名]

```

### ブランチモデル(GitHub Flow)

ブランチの管理方法。

#### GitHub Flow

ブランチモデルの一つ。  
ブランチを２つしか使わない(master, topic)  
頻繁にリリースする開発に適している。

##### masterブランチは常にリリース出来る状態に  

GitHub Flowでは、masterブランチへマージした後すぐデプロイする為。

##### かならずmasterブランチからtopicブランチを切る

機能の追加・変更・修正の際には、masterブランチからtopicブランチを切って作業を行う。  
topicブランチの名前はなんの為のブランチなのか説明するようにつける。

## リモートリポジトリ(remote)

### リモートリポジトリ一覧確認

```bash

git remote
origin
topic

```

### originとは

作成中...

### masterとは

作成中...

### リモートリポジトリの追加

```bash

git remote add origin [リポジトリ]

```

### リモートリポジトリの削除

```bash

git remote rm origin

```

## ステータス(status)

前回のコミットと比較した変更内容を表示する。

```bash

git status

```

## add

ファイルをステージングエリアに追加する。

```bash

git add foo.txt

```

## コミット(commit)

作成中...

### コメント付きコミット

```bssh

git commit -m "fix: レイアウト修正"

```

### 直前のコミットを上書き

ファイルの追加漏れがあった、コミットメッセージを修正したい等で使う。

```bash

git commit --amend

```

## プッシュ(push)

ローカルリポジトリをリモートリポジトリにアップロードする。

```bash

git push origin master

```
