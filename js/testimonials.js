
document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const altText = item.querySelector('img').alt;
            createModal(imgSrc, altText);
        });
    });

    function createModal(src, alt) {
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'gallery-modal-overlay';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'gallery-modal-content';
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        
        const caption = document.createElement('p');
        caption.textContent = alt;
        
        modalContent.appendChild(img);
        modalContent.appendChild(caption);
        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);
        
        modalOverlay.addEventListener('click', () => {
            modalOverlay.remove();
        });
    }
});
