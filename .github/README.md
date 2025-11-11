# Overview
- コーポレートサイト（のサンプル）です

## 技術スタックなど
- HTML5: セマンティックタグ
- CSS3: Flexbox, Grid, Animations, Transitions
- JavaScript (ES6+): 
  - Intersection Observer API
  - Event Listeners
  - DOM Manipulation
  - Smooth Scroll

### フォームについて
- デモ版のため、実際の送信機能は実装されていません
- 実装する場合は、バックエンドAPIとの連携が必要です

### 画像について
- 現在はUnsplashの画像を使用しています
- 商用利用する場合は、適切なライセンスの画像に差し替えてください



# 以下、カスタマイズガイド

## 目次

1. [基本的なカスタマイズ](#基本的なカスタマイズ)
2. [色の変更](#色の変更)
3. [フォントの変更](#フォントの変更)
4. [画像の差し替え](#画像の差し替え)
5. [テキストの編集](#テキストの編集)
6. [セクションの追加・削除](#セクションの追加削除)
7. [アニメーションの調整](#アニメーションの調整)
8. [レスポンシブの調整](#レスポンシブの調整)
9. [フォーム送信の実装](#フォーム送信の実装)
10. [高度なカスタマイズ](#高度なカスタマイズ)

---

## 基本的なカスタマイズ

### ファイル構造の理解

```
corporation-sample1/
├── index.html          # メインHTML - コンテンツの編集
├── css/
│   ├── style.css      # メインCSS - デザインの基本
│   └── custom.css     # カスタムCSS - 追加スタイル用
├── js/
│   ├── main.js        # メインJS - 基本機能
│   └── custom.js      # カスタムJS - 追加機能用
└── README.md
```

### 編集の優先順位

1. **テキスト変更**: `index.html` を編集
2. **デザイン変更**: `css/style.css` を編集（または `css/custom.css` に追加）
3. **機能追加**: `js/custom.js` に記述

---

## 色の変更

### メインカラーの変更

`css/style.css` で以下の箇所を検索して変更：

```css
/* 青色 (#4A90E2) を別の色に変更 */
#4A90E2

/* 例: 赤色に変更する場合 */
#E74C3C
```

### グラデーションの変更

```css
/* コンセプトセクションのグラデーション */
.concept {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* 例: 別のグラデーションに変更 */
.concept {
    background: linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%);
}
```

### カラーパレットの一括変更

より管理しやすくするため、CSS変数を使うことをお勧めします。

`css/style.css` の最初に追加：

```css
:root {
    --primary-color: #4A90E2;
    --secondary-color: #764ba2;
    --text-color: #333;
    --bg-color: #fff;
    --bg-secondary: #f8f9fa;
}

/* 使用例 */
.logo span {
    color: var(--primary-color);
}
```

---

## フォントの変更

### Google Fontsの変更

1. [Google Fonts](https://fonts.google.com/) で好きなフォントを選択
2. `index.html` の `<head>` セクションのリンクを変更

```html
<!-- 例: Roboto と Noto Sans JP を使用 -->
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
```

3. `css/style.css` でフォントファミリーを変更

```css
body {
    font-family: 'Noto Sans JP', sans-serif;
}

.hero-title,
.section-title {
    font-family: 'Roboto', sans-serif;
}
```

### ローカルフォントの使用

```css
@font-face {
    font-family: 'MyCustomFont';
    src: url('../fonts/custom-font.woff2') format('woff2'),
         url('../fonts/custom-font.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body {
    font-family: 'MyCustomFont', sans-serif;
}
```

---

## 画像の差し替え

### ヒーロースライダーの画像変更

`index.html` の以下の部分を編集：

```html
<div class="hero-slide active">
    <div class="hero-image" style="background-image: url('あなたの画像URL')"></div>
</div>
```

### セクション画像の変更

```html
<!-- ABOUT セクションの画像 -->
<div class="about-image">
    <img src="あなたの画像URL" alt="説明文">
</div>
```

### 推奨画像サイズ

- **ヒーロー画像**: 1920px × 1080px 以上
- **セクション画像**: 800px × 600px 以上
- **チーム写真**: 400px × 500px
- **作品サムネイル**: 800px × 600px

### 画像の最適化

- JPGまたはWebP形式を推奨
- ファイルサイズは200KB以下に圧縮

---

## テキストの編集

### 会社名の変更


```html
<!-- ヘッダーロゴ -->
<div class="logo">
    <a href="#top">YOUR<span>COMPANY</span></a>
</div>
```

### キャッチコピーの変更

```html
<h1 class="hero-title">
    <span class="title-line">あなたの</span>
    <span class="title-line">キャッチコピー</span>
</h1>
```

### 会社情報の編集

```html
<!-- CONTACT セクション -->
<dl class="info-list">
    <dt>所在地</dt>
    <dd>〒000-0000<br>あなたの住所</dd>
    
    <dt>電話</dt>
    <dd>TEL : 00-0000-0000</dd>
    
    <!-- ... -->
</dl>
```

---

## セクションの追加・削除

### セクションの削除

不要なセクションを削除する場合：

1. `index.html` で該当セクション全体を削除
2. ナビゲーションからもリンクを削除

```html
<!-- 例: TEAM セクションを削除する場合 -->

<!-- ナビゲーションから削除 -->
<li><a href="#team">TEAM</a></li>  <!-- この行を削除 -->

<!-- セクション全体を削除 -->
<section class="team section" id="team">
    <!-- ... -->
</section>  <!-- ここまで削除 -->
```

### セクションの追加

1. 既存のセクションをコピー
2. IDとコンテンツを変更
3. ナビゲーションにリンクを追加

```html
<!-- 新しいセクション -->
<section class="custom-section section" id="custom">
    <div class="container">
        <div class="section-header fade-in">
            <h2 class="section-title">NEW SECTION</h2>
            <p class="section-subtitle">新しいセクション</p>
        </div>
        <div class="custom-content fade-in">
            <!-- コンテンツを記述 -->
        </div>
    </div>
</section>
```

---

## アニメーションの調整

### フェードインの速度変更

`css/style.css` で以下を編集：

```css
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;  /* 0.8s を変更 */
}
```

### スライダーの速度変更

`js/main.js` で以下を編集：

```javascript
// 5000 = 5秒ごと
setInterval(changeSlide, 5000);  // この数値を変更

// 例: 3秒ごとに変更する場合
setInterval(changeSlide, 3000);
```

### ホバーエフェクトの調整

```css
.work-item:hover {
    transform: translateY(-10px);  /* 移動量を変更 */
    transition: all 0.3s ease;     /* 速度を変更 */
}
```

---

## レスポンシブの調整

### ブレークポイントの変更

`css/style.css` で以下を編集：

```css
/* タブレット（デフォルト: 1024px） */
@media (max-width: 1024px) {
    /* スタイル */
}

/* スマートフォン（デフォルト: 768px） */
@media (max-width: 768px) {
    /* スタイル */
}
```

### モバイルでのセクション順序変更

```css
@media (max-width: 768px) {
    .about-content {
        flex-direction: column-reverse;  /* 順序を逆に */
    }
}
```

---

## フォーム送信の実装

### PHPでの実装例

`contact.php` を作成：

```php
<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $company = htmlspecialchars($_POST['company']);
    $message = htmlspecialchars($_POST['message']);
    
    // メール送信
    $to = 'your-email@example.com';
    $subject = 'お問い合わせ';
    $body = "名前: {$name}\nメール: {$email}\n会社名: {$company}\n\n{$message}";
    
    if (mail($to, $subject, $body)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>
```

`js/main.js` のフォーム処理を変更：

```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    
    try {
        const response = await fetch('contact.php', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert('お問い合わせを受け付けました。');
            contactForm.reset();
        } else {
            alert('送信に失敗しました。');
        }
    } catch (error) {
        console.error('エラー:', error);
        alert('送信に失敗しました。');
    }
});
```

---

## 高度なカスタマイズ

### モーダルウィンドウの追加

1. HTMLにモーダルを追加

```html
<div class="modal" id="myModal">
    <div class="modal-content">
        <span class="modal-close">&times;</span>
        <h2>モーダルのタイトル</h2>
        <p>コンテンツ</p>
    </div>
</div>
```

2. CSSでスタイリング

```css
.modal {
    display: none;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
    background-color: #fff;
    margin: 10% auto;
    padding: 40px;
    width: 80%;
    max-width: 600px;
    border-radius: 8px;
}
```

3. JavaScriptで制御

```javascript
const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.modal-close');

// モーダルを開く
function openModal() {
    modal.style.display = 'block';
}

// モーダルを閉じる
closeBtn.onclick = () => {
    modal.style.display = 'none';
};
```

### タブ機能の追加

```html
<div class="tabs">
    <button class="tab-btn active" data-tab="tab1">タブ1</button>
    <button class="tab-btn" data-tab="tab2">タブ2</button>
</div>

<div class="tab-content active" id="tab1">
    タブ1のコンテンツ
</div>
<div class="tab-content" id="tab2">
    タブ2のコンテンツ
</div>
```

```javascript
const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.dataset.tab;
        
        // すべてのタブを非アクティブに
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // 選択されたタブをアクティブに
        document.getElementById(targetTab).classList.add('active');
        button.classList.add('active');
    });
});
```

---

## トラブルシューティング

### よくある問題と解決方法

#### 問題1: 画像が表示されない
**解決方法**: 
- 画像のURLが正しいか確認
- 画像ファイルのパスが正しいか確認
- ブラウザの開発者ツールでエラーを確認

#### 問題2: スクロールアニメーションが動かない
**解決方法**:
- `.fade-in` クラスが付いているか確認
- JavaScriptが正しく読み込まれているか確認
- ブラウザがIntersection Observer APIに対応しているか確認

#### 問題3: レスポンシブが効かない
**解決方法**:
- `<meta name="viewport">` タグが設定されているか確認
- CSSのメディアクエリが正しいか確認

---

## パフォーマンス最適化

### 画像の最適化
- WebP形式を使用
- 適切なサイズにリサイズ
- 遅延読み込み（lazy loading）を実装

### CSSの最適化
- 不要なスタイルを削除
- CSSを圧縮（minify）
- Critical CSSをインライン化

### JavaScriptの最適化
- 不要なコードを削除
- JavaScriptを圧縮（minify）
- async/deferで読み込み

---



以上
