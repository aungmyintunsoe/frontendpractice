const headers = document.querySelectorAll('.accordion-header');
headers.forEach(header => {
    header.addEventListener('click', () => {
        const parentItem = header.parentElement;
        const isActive = parentItem.classList.contains('active');

        const allItems = document.querySelectorAll('.accordion-item');
        allItems.forEach(item => {
            item.classList.remove('active');
        })

        if (!isActive) {
            parentItem.classList.add('active');
        }
    })
})