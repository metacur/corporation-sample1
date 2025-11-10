// ==========================================
// カスタマイズ用JavaScriptファイル
// ==========================================

/*
   このファイルは、main.js を上書きせずに
   独自の機能を追加するためのファイルです。
   
   使い方:
   1. index.html の </body> タグの前で、main.js の後に読み込む
   2. このファイルに追加の機能を記述
   
   例: <script src="js/custom.js"></script>
*/

// ==========================================
// カスタム関数の例
// ==========================================

/**
 * スムーズスクロールのカスタム実装例
 * @param {string} targetId - スクロール先の要素ID
 * @param {number} offset - オフセット値（ピクセル）
 */
/*
function customSmoothScroll(targetId, offset = 0) {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        const targetPosition = targetElement.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}
*/

// ==========================================
// 追加のイベントリスナー例
// ==========================================

/**
 * カスタムボタンのクリックイベント例
 */
/*
document.addEventListener('DOMContentLoaded', () => {
    const customButton = document.getElementById('customButton');
    
    if (customButton) {
        customButton.addEventListener('click', () => {
            console.log('カスタムボタンがクリックされました');
            // ここに処理を記述
        });
    }
});
*/

// ==========================================
// Ajaxリクエストの例
// ==========================================

/**
 * フォームデータをサーバーに送信する例
 * @param {Object} data - 送信するデータ
 */
/*
async function sendFormData(data) {
    try {
        const response = await fetch('your-api-endpoint.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            const result = await response.json();
            console.log('送信成功:', result);
            return result;
        } else {
            throw new Error('送信に失敗しました');
        }
    } catch (error) {
        console.error('エラー:', error);
        throw error;
    }
}
*/

// ==========================================
// ローカルストレージの活用例
// ==========================================

/**
 * ローカルストレージにデータを保存
 * @param {string} key - キー名
 * @param {any} value - 保存する値
 */
/*
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('ローカルストレージへの保存に失敗:', error);
    }
}
*/

/**
 * ローカルストレージからデータを取得
 * @param {string} key - キー名
 * @returns {any} 保存されていた値
 */
/*
function getFromLocalStorage(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error('ローカルストレージからの取得に失敗:', error);
        return null;
    }
}
*/

// ==========================================
// モーダルウィンドウの例
// ==========================================

/**
 * モーダルウィンドウを開く
 * @param {string} modalId - モーダルのID
 */
/*
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}
*/

/**
 * モーダルウィンドウを閉じる
 * @param {string} modalId - モーダルのID
 */
/*
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}
*/

// ==========================================
// タブ切り替えの例
// ==========================================

/**
 * タブを切り替える
 * @param {string} tabId - 表示するタブのID
 */
/*
function switchTab(tabId) {
    // すべてのタブコンテンツを非表示
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // すべてのタブボタンから active クラスを削除
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // 指定されたタブを表示
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // 対応するボタンに active クラスを追加
    const targetButton = document.querySelector(`[data-tab="${tabId}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
}
*/

// ==========================================
// アコーディオンメニューの例
// ==========================================

/**
 * アコーディオンを初期化
 */
/*
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            
            // 現在のアイテムをトグル
            accordionItem.classList.toggle('active');
            
            // 高さのアニメーション
            if (accordionItem.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = '0';
            }
        });
    });
}
*/

// ==========================================
// 画像ギャラリーの例
// ==========================================

/**
 * ライトボックス（画像拡大表示）を初期化
 */
/*
function initLightbox() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            // ライトボックスを作成
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${image.src}" alt="${image.alt}">
                    <button class="lightbox-close">&times;</button>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            
            // 閉じるボタンのイベント
            const closeButton = lightbox.querySelector('.lightbox-close');
            closeButton.addEventListener('click', () => {
                lightbox.remove();
            });
            
            // 背景クリックで閉じる
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.remove();
                }
            });
        });
    });
}
*/

// ==========================================
// カウントアップアニメーションの例
// ==========================================

/**
 * 数値をカウントアップ表示
 * @param {HTMLElement} element - 対象の要素
 * @param {number} target - 目標値
 * @param {number} duration - アニメーション時間（ミリ秒）
 */
/*
function countUp(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps想定
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}
*/

// ==========================================
// スクロール進捗バーの例
// ==========================================

/**
 * ページスクロールの進捗バーを表示
 */
/*
function initScrollProgressBar() {
    // プログレスバーを作成
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #4A90E2, #764ba2);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    // スクロールイベント
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}
*/

// ==========================================
// ダークモード切り替えの例
// ==========================================

/**
 * ダークモードを切り替える
 */
/*
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // 設定を保存
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// ページ読み込み時にダークモード設定を復元
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
});
*/

// ==========================================
// Google Analytics連携の例
// ==========================================

/**
 * カスタムイベントをGoogle Analyticsに送信
 * @param {string} category - イベントカテゴリー
 * @param {string} action - イベントアクション
 * @param {string} label - イベントラベル
 */
/*
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}
*/

// ==========================================
// ここにカスタムJavaScriptを記述
// ==========================================

// 初期化処理の例
/*
document.addEventListener('DOMContentLoaded', () => {
    console.log('カスタムJavaScriptが読み込まれました');
    
    // ここに初期化処理を記述
    // initAccordion();
    // initLightbox();
    // initScrollProgressBar();
});
*/
