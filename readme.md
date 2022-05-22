# Memo

## VSC関連
1.  末尾スペース除去をMarkdownの場合に対象外とする方法
　https://github.com/microsoft/vscode/issues/1679

    ```
      "files.trimTrailingWhitespace": true,
      "[markdown]": {
          "files.trimTrailingWhitespace": false
      },
    ```

1. ランダム情報の作成ツール(vscode-random)

    ```
    　　　挿入したい場所にカーソルを持って行き、
    　　　コマンドパレット(command+p)を開いて"random"と打つ
    ```

1. 補完処理のショートカット  
    Command + . で補完候補が出てくる。

1. []内にあるカーソルを外にもっていく方法  
　既存の動作では無いため、キーボードショートカットを追加する。
　Ctrl+shift+pでパレットを開いて、keyboard biding (json)で表示されたユーザ設定で
　下記を設定　(oem_plusはセミコロン)
    ```
    {
        "key": "ctrl+oem_plus",
        "command": "cursorRight",
        "when": "textInputFocus"
    }
    ```
## **関連

## Dart関連
1. ラムダ式について  
　基本的にまずDartで表現される関数は下記のフォーマットがベース。

    ```
    (int a) {           // 引数を()で指定。
        return a+1;　   // 関数内の式は;で終わる
    };                  // 関数自体も;で終わる
    ```
    また、関数を変数とすることが可能。

    ```
    // 返値の型 変数の型(引数) 変数名 = 内容
    int addValue = (int a) { return a+1; };
    
    print(addValue(1)); // 2が表示
    ```
    ラムダ式を用いると下記の形に書き換え可能
    
    ```
    // returnのみの関数であれば、{return }を => に変更可能
    int addValue = (int a) => a + 1;
    // 無名関数として使用することも可能。
    print((int a)=> a+1);
    ```
    関数の引数に関数を渡すことも可能なため、下記の書き方もある?
    ```
    int addValue = (int a)=>a+1;
    int mulValue(addValue(1)) = (int a) => a*1; 
    ```

