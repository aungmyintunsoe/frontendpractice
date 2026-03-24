const tabButtons = document.querySelectorAll('.tab-btn');
const contentPanels = document.querySelectorAll('.content-panel');
const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-btn');
const closeBtn = document.getElementById('close-btn');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        contentPanels.forEach(panel => panel.classList.remove('active'));

        button.classList.add('active');
        const targetId = button.getAttribute('data-tab');
        const targetPanel = document.getElementById(targetId);
        targetPanel.classList.add('active');
    })

});

if (localStorage.getItem('cookieAccepted') === 'true') {
    cookieBanner.classList.add('hidden');
}

acceptBtn.addEventListener('click', () => {
    cookieBanner.classList.add('hidden');
    localStorage.setItem('cookieAccepted', 'true');
});

closeBtn.addEventListener('click', () => {
    cookieBanner.classList.add('hidden');
});