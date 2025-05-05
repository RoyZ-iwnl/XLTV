// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 主题切换
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeIcon.classList.toggle('fa-moon');
        themeIcon.classList.toggle('fa-sun');
    });

    // 为所有按钮添加触摸反馈
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.opacity = '0.7';
        });
        
        button.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });

    // 优化移动端点击延迟
    document.addEventListener('touchstart', function() {}, {passive: true});

    // 标签页切换
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有活动状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // 添加当前活动状态
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // 随机梗功能
    const randomMemeText = document.getElementById('random-meme');
    const generateButton = document.getElementById('generate-meme');
    const copyButton = document.getElementById('copy-meme');

    function getRandomMeme() {
        const randomIndex = Math.floor(Math.random() * memeData.memes.length);
        return memeData.memes[randomIndex];
    }

    // 生成随机梗
    generateButton.addEventListener('click', () => {
        randomMemeText.textContent = getRandomMeme();
    });

    // 复制梗
    copyButton.addEventListener('click', () => {
        if (randomMemeText.textContent) {
            navigator.clipboard.writeText(randomMemeText.textContent)
                .then(() => alert('复制成功！'))
                .catch(() => alert('复制失败，请手动复制'));
        }
    });

    // 显示所有梗
    const memeList = document.querySelector('.meme-list');
    
    function displayAllMemes() {
        memeList.innerHTML = '';
        memeData.memes.forEach(meme => {
            const memeItem = document.createElement('div');
            memeItem.className = 'meme-item';
    
            // 创建文本容器
            const memeText = document.createElement('div');
            memeText.className = 'meme-text';
            memeText.textContent = meme;
    
            // 创建复制按钮
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.innerHTML = '<i class="far fa-copy"></i> 复制';
            copyButton.addEventListener('click', () => copyText(meme));
    
            // 将元素添加到memeItem
            memeItem.appendChild(memeText);
            memeItem.appendChild(copyButton);
            memeList.appendChild(memeItem);
        });
    }

    // 添加提示框函数
    function showToast(message) {
        // 创建或获取已存在的toast元素
        let toast = document.querySelector('.toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            document.body.appendChild(toast);
        }

        // 设置消息并显示
        toast.textContent = message;
        toast.classList.add('show');

        // 3秒后隐藏
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // 复制文本函数
    function copyText(text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                showToast('复制成功！');
            })
            .catch(() => {
                showToast('复制失败，请手动复制');
            });
    }

    // 初始化显示
    generateButton.click(); // 生成第一个随机梗
    displayAllMemes(); // 显示所有梗
});