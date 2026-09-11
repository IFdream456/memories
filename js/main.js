// IFdReAm 页面交互脚本
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');

    // 开启旅程按钮事件
    startBtn.addEventListener('click', () => {
        startBtn.style.transform = 'scale(0.92)';
        setTimeout(() => {
            startBtn.style.transform = 'translateY(-2px)';
            modal.classList.remove('hidden');
        }, 150);
    });

    // 了解更多按钮事件
    aboutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('IFdReAm 是一个兼具粉蓝二次元梦幻美感与现代极简风格的前端项目。');
    });

    // 关闭弹窗
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // 点击模态框背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
