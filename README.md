# BMI 計算アプリ

このアプリは、身長と体重を入力することで BMI（Body Mass Index）を計算し、判定結果を表示するシンプルな Web アプリケーションです。  
Vue 3 + Pinia + Vite を使用しています。

## デモ

![スクリーンショット](スクリーンショットのURLをここに追加)

## 機能

- 身長(cm)と体重(kg)の入力
- BMI 値の自動計算と表示
- BMI 判定（6 段階、色分け表示）
- 入力値のリセット
- レスポンシブデザイン

## 使い方

1. 身長と体重を入力してください。
2. 入力に応じて BMI 値と判定が自動で表示されます。
3. 「リセット」ボタンで初期値に戻せます。

## 開発環境

- [Vue 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vite](https://vitejs.dev/)

## セットアップ

```sh
npm install
npm run dev
```

## ディレクトリ構成

```
├── src/
│   ├── App.vue                # ルートコンポーネント
│   ├── main.js                # エントリーポイント
│   ├── components/
│   │   ├── BmiForm.vue        # 入力フォーム
│   │   └── BmiResult.vue      # 結果表示
│   └── stores/
│       └── bmiStore.js        # Piniaストア（状態管理・計算ロジック）
├── index.html
├── package.json
├── vite.config.js
└── ...
```

## ビルド・デプロイ

```sh
npm run build
```

GitHub Pages への自動デプロイは [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) で設定されています。

## ライセンス

[MIT](LICENSE)
