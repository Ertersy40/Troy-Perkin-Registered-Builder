document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById('carousel');
    const images = carousel.getElementsByTagName('img');
    const imageCount = images.length;
    const gap = 4;
    let index = 0;
    

    // Clone the first few images and append them to the carousel
    for (let i = 0; i < imageCount; i++) {
        const clone = images[i].cloneNode(true);
        carousel.appendChild(clone);
    }

    // Set initial image positions
    for (let i = 0; i < carousel.children.length; i++) {
        carousel.children[i].style.transform = `translateY(${i * (100 + gap)}%)`;
    }

    function nextImage() {
        index++;
        for (let i = 0; i < carousel.children.length; i++) {
            setTimeout(() => {
                carousel.children[i].style.transform = `translateY(${(i - index) * (100 + gap)}%)`;
            }, 1500)
        }
    
        if (index === imageCount + 1) {
            // Instantly reset the position of the images to the start
            for (let i = 0; i < carousel.children.length; i++) {
                carousel.children[i].style.transition = 'none'; // Temporarily remove the transition
                carousel.children[i].style.transform = `translateY(${i * (100 + gap)}%)`;
            }

            // Force a reflow
            void carousel.offsetHeight;

            // Re-enable the transition for subsequent animations
            for (let i = 0; i < carousel.children.length; i++) {
                carousel.children[i].style.transition = '';
            }

            index = 0;
        }
    }
    
    setInterval(nextImage, 3000); // Adjust the interval timing
    
    
});
