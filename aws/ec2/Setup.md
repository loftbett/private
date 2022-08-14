# 初期セットアップ手順

1. ターミナルソフトでのログイン  
awsのコンソールページで、インスタンスを作成する。  
作成する際に、SSHキーペアを作成し、pemファイルをダウンロードする。  
pemファイルは、フォルダプロパティで権限設定をしたフォルダに置かないとエラーになる。  
　![手順1](/imageGarage/aws/pem_folderSet1.png)

1. グループの作成  
    標準グループと管理グループを作成
    ```
    # sudo groupadd general   // 一般ユーザグループ作成  
    ```
1. ユーザ作成  
    下記コマンドでユーザを追加。ホームディレクトリも同時に追加する
    ```
    # sudo useradd -m -G wheel,general loftbett  // 管理ユーザ  
    # sudo useradd -m -g general satoru             // 一般ユーザ
    ```
1. パスワード設定  
    作成したユーザにパスワードを設定する
    ```
    # sudo passwd loftbett
    ```
1. sudo権限を付与する  
    https://qiita.com/tisk_jdb/items/16ae4a9ba554cd087ca0