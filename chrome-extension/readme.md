# ManifestMemo
　https://qiita.com/shiro1212/items/12f0a767494a7b2ab0b3

## action
拡張機能をクリックしたときのアクションを定義。  
default_popupを指定することで、押したときのポップアップ画面を表示してくれる。  
v2までは[browser_action]と[page_action]に分かれていたが、v3でactionに統合

## content_script
表示しているWebページの情報を取得する必要がある場合に設定する。  
使用できるAPIに制限がある。  
　matchesには挿入されるページを指定
　css, jsには挿入されるCss/Js群を指定する。

