let currentIndex = 0;

function moveSlider(direction) {
    const box = document.querySelector('.c-box');
    const totalItems = document.querySelectorAll('.c-box-item').length;
    const visibleItems = 4; // Görünen kutucuk sayısı
    const itemWidth = document.querySelector('.c-box-item').offsetWidth + 10; // gap'ı da hesaba kat

    currentIndex += direction;

    // Sınır kontrolleri
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > totalItems - visibleItems) {
        currentIndex = totalItems - visibleItems;
    }

    const translateX = -currentIndex * itemWidth;
    box.style.transform = `translateX(${translateX}px)`;

    // Buton görünürlüğünü kontrol et
    updateButtonVisibility();
}

function updateButtonVisibility() {
    const leftButton = document.querySelector('.c-left');
    const rightButton = document.querySelector('.c-right');
    const totalItems = document.querySelectorAll('.c-box-item').length;
    const visibleItems = 4;

    leftButton.style.display = currentIndex === 0 ? 'none' : 'block';
    rightButton.style.display = currentIndex >= totalItems - visibleItems ? 'none' : 'block';
}

// Sayfa yüklendiğinde buton durumunu güncelle
document.addEventListener('DOMContentLoaded', updateButtonVisibility);

// RESCENT
const crescent = document.querySelector(".c-rescent .c-box");
let locationValue = 0;

for (let x of dataArray) {
    if (locationValue < 10) {
        let inHTML = `<a href="#" class="c-box-item" id="element-${locationValue}"></a>`;
        
        crescent.insertAdjacentHTML("beforeend", inHTML);
        
        let styleElement = document.getElementById("element-" + locationValue);
        styleElement.style.backgroundImage = `url(${x.movieTumbSRC})`;
        
        locationValue++;
    }
}