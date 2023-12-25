document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelectorAll('.carouselImage');
    let currentIndex = 0;

    function cycleImages() {
        const totalImages = carouselImages.length;
        const topMargins = [
            [-200, 20, 20],
            [120, 20, -1000],
            [485, -1000, 20]
        ];

        currentIndex = (currentIndex + 1) % totalImages;

        carouselImages.forEach((img, index) => {
            let newMarginTop = topMargins[currentIndex][index];

            if (newMarginTop === -1000) {
                img.style.zIndex = 0;
            } else {
                img.style.zIndex = 1;
            }

            img.style.marginTop = `${newMarginTop}px`;

            setTimeout(() => {
                img.style.zIndex = 1;
            }, 1000);
        });
    }

    if (window.innerWidth > 600) {
        setInterval(cycleImages, 4000);
    }

    // Optional: Listen for window resize and restart/stop the interval
    window.addEventListener('resize', () => {
        if (window.innerWidth > 600) {
            setInterval(cycleImages, 4000);
        }
    });
});
