document.addEventListener('DOMContentLoaded', function() {
    const imagePaths = [
        'images/01.JPG',
        'images/02.JPG',
        'images/03.JPG',
        'images/04.JPG',
        'images/05.JPG',
        'images/07.JPG',
        'images/08.JPG',
        'images/09.JPG',
        'images/10.JPG',
        'images/11.JPG',
        'images/12.JPG',
        'images/13.JPG',
        'images/14.JPG',
        'images/15.JPG',
    ];

    const gallery = document.querySelector('.gallery');
    const container = document.querySelector('.album-container');

    // Tạo các phần tử div cho mỗi hình ảnh
    imagePaths.forEach((path, index) => {
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('photo');
        
        const imgElement = document.createElement('img');
        imgElement.src = path;

        
        const captionDiv = document.createElement('div');
        captionDiv.classList.add('caption');
       
        
        photoDiv.appendChild(imgElement);

        gallery.appendChild(photoDiv);
    });

    const photos = document.querySelectorAll('.photo');
    const texts = document.querySelectorAll('.text');

    function getRandomPosition() {
        const x = Math.random() * (container.clientWidth - 150);
        const y = Math.random() * (container.clientHeight - 150);
        return { x, y };
    }

    photos.forEach((photo, index) => {
        const { x, y } = getRandomPosition();
        photo.style.left = `${x}px`;
        photo.style.top = `${y}px`;
        photo.style.opacity = '1';

        setTimeout(() => {
            const centerX = container.clientWidth / 2 - 75; // 75 is half of photo width
            const centerY = container.clientHeight / 2 - 75; // 75 is half of photo height
            photo.style.transform = `translate(${centerX - x}px, ${centerY - y}px) scale(0)`;
            photo.style.opacity = '0';
        }, index * 200); // Giảm thời gian chờ xuống 200ms để các hình ảnh di chuyển nhanh hơn
    });

    // Show text after all photos have been animated
    setTimeout(() => {
        let currentTextIndex = 0;

        function showNextText() {
            if (currentTextIndex > 0) {
                texts[currentTextIndex - 1].style.opacity = 0; // Hide previous text
            }
            if (currentTextIndex < texts.length) {
                texts[currentTextIndex].style.opacity = 1; // Show current text
                currentTextIndex++;
                setTimeout(showNextText, 4000); // Tăng thời gian chờ lên 3000ms để các văn bản xuất hiện chậm hơn
            } else {
                // Sau khi tất cả các văn bản đã được hiển thị, điều hướng đến flower.html
                window.location.href = 'flower.html';
            }
        }

        showNextText();
    }, photos.length * 200 + 1000); // Giảm thời gian chờ xuống 200ms để các hình ảnh di chuyển nhanh hơn
});
