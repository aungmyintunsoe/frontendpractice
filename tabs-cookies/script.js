const tabButtons = document.querySelectorAll('.tab-btn');
const contentPanels = document.querySelectorAll('.content-panel');

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