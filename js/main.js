// ==========================================
// ハンバーガーメニューの制御
// ==========================================

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

// ハンバーガーメニューのクリックイベント
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    
    // ボディのスクロールを制御
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// ナビゲーションリンクのクリックでメニューを閉じる
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ==========================================
// ヘッダーのスクロール制御
// ==========================================

const header = document.getElementById('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // スクロール量が100px以上の場合、ヘッダーの背景を濃くする
    if (scrollTop > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
    
    lastScrollTop = scrollTop;
});

// ==========================================
// ヒーロースライダーの制御
// ==========================================

const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

// スライドを切り替える関数
function changeSlide() {
    // 現在のスライドの active クラスを削除
    heroSlides[currentSlide].classList.remove('active');
    
    // 次のスライドへ
    currentSlide = (currentSlide + 1) % heroSlides.length;
    
    // 次のスライドに active クラスを追加
    heroSlides[currentSlide].classList.add('active');
}

// 5秒ごとにスライドを切り替え
setInterval(changeSlide, 5000);

// ==========================================
// スクロールアニメーション
// ==========================================

// Intersection Observer のオプション
const observerOptions = {
    root: null, // ビューポートをルートとする
    rootMargin: '0px 0px -100px 0px', // 下から100px手前で発火
    threshold: 0.1 // 要素の10%が見えたら発火
};

// Intersection Observer のコールバック関数
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 要素が画面内に入ったら visible クラスを追加
            entry.target.classList.add('visible');
            
            // 一度アニメーションしたら監視を解除（パフォーマンス向上）
            observer.unobserve(entry.target);
        }
    });
};

// Intersection Observer のインスタンスを作成
const observer = new IntersectionObserver(observerCallback, observerOptions);

// .fade-in クラスを持つすべての要素を監視
const fadeInElements = document.querySelectorAll('.fade-in');
fadeInElements.forEach(element => {
    observer.observe(element);
});

// ==========================================
// スムーススクロール
// ==========================================

// すべてのアンカーリンクを取得
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        
        // ページトップへのリンクの場合
        if (targetId === '#' || targetId === '#top') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        // 対象の要素を取得
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // ヘッダーの高さを取得
            const headerHeight = header.offsetHeight;
            
            // 対象要素の位置を取得（ヘッダーの高さを考慮）
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            // スムーススクロール
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// フォーム送信の処理
// ==========================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // フォームデータを取得
    const formData = new FormData(contactForm);
    const data = {};
    
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // ここで実際の送信処理を行う
    // 例: fetch APIを使ってサーバーにデータを送信
    console.log('フォームデータ:', data);
    
    // デモ用のアラート表示
    alert('お問い合わせを受け付けました。\n（これはデモです。実際には送信されていません。）');
    
    // フォームをリセット
    contactForm.reset();
});

// ==========================================
// ページ読み込み時の処理
// ==========================================

window.addEventListener('load', () => {
    // ローディング完了後の処理
    document.body.classList.add('loaded');
});

// ==========================================
// リサイズ時の処理
// ==========================================

let resizeTimer;
window.addEventListener('resize', () => {
    // リサイズ処理を間引く（パフォーマンス向上）
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // ウィンドウ幅が768pxを超えた場合、モバイルメニューを閉じる
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            document.body.style.overflow = '';
        }
    }, 250);
});

// ==========================================
// パララックス効果（オプション）
// ==========================================

// ヒーローセクションのパララックス効果
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroHeight = hero.offsetHeight;
    
    // ヒーローセクション内のスクロールのみ
    if (scrolled <= heroHeight) {
        // スクロール量の半分だけ画像を動かす（パララックス効果）
        const parallaxValue = scrolled * 0.5;
        hero.style.transform = `translateY(${parallaxValue}px)`;
    }
});

// ==========================================
// スクロールインジケーターの表示制御
// ==========================================

const scrollIndicator = document.querySelector('.scroll-indicator');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // スクロール量が200px以上の場合、スクロールインジケーターを非表示
    if (scrollTop > 200) {
        scrollIndicator.style.opacity = '0';
    } else {
        scrollIndicator.style.opacity = '1';
    }
});

// ==========================================
// 画像の遅延読み込み（Lazy Loading）
// ==========================================

// Intersection Observer を使った画像の遅延読み込み
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserverOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.01
};

const imageObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
};

const imageObserver = new IntersectionObserver(imageObserverCallback, imageObserverOptions);

lazyImages.forEach(image => {
    imageObserver.observe(image);
});

// ==========================================
// アクティブなナビゲーションリンクのハイライト
// ==========================================

// 現在のセクションに応じてナビゲーションをハイライト
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // 対応するナビゲーションリンクに active クラスを追加
            document.querySelectorAll('.nav-list a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ==========================================
// ページトップへ戻るボタン（オプション）
// ==========================================

// ページトップへ戻るボタンを動的に作成
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #4A90E2;
        color: #fff;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(74, 144, 226, 0.4);
    `;
    
    document.body.appendChild(button);
    
    // スクロールイベントでボタンの表示/非表示を制御
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    // ボタンクリックでページトップへ
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ホバーエフェクト
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
};

// ページトップへ戻るボタンを作成
createBackToTopButton();

// ==========================================
// パフォーマンス最適化
// ==========================================

// スクロールイベントのスロットル処理
let scrollTimeout;
const optimizedScroll = (callback) => {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
            callback();
            scrollTimeout = null;
        }, 10);
    }
};

// ==========================================
// デバッグ用のコンソール出力
// ==========================================

console.log('CREATIVE DESIGN STUDIO - Website loaded successfully');
console.log('All animations and interactions are ready.');
