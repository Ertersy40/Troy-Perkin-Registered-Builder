document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelectorAll('.carouselImage');
    let currentIndex = 0;

    function cycleImages() {
        const totalImages = carouselImages.length;

        // Update the position of each image
        carouselImages.forEach((img, index) => {
            let newMarginTop = 20 + (index - currentIndex) * (img.offsetHeight + 20);
            if (index === currentIndex) {
                newMarginTop = -200; // Adjust based on your design
            }
            img.style.marginTop = `${newMarginTop}px`;
        });

        // Update current index
        currentIndex = (currentIndex + 1) % totalImages;
    }

    setInterval(cycleImages, 3000);

    const messageField = document.getElementById('message');
    if (messageField) {
        const cardDiv = messageField.closest('.card'); // Get the closest parent with class 'card'

        const adjustHeight = (element) => {
            element.style.height = 'auto';
            element.style.height = element.scrollHeight + 'px';
        };

        const adjustCardHeight = () => {
            // Optional: Adjust the card height explicitly if needed
            cardDiv.style.height = 'auto'; // Set card height to auto
        };

        messageField.addEventListener('input', function () {
            adjustHeight(this);
            adjustCardHeight(); // Adjust card height when textarea changes
        });

        // Initialize textarea and card height
        adjustHeight(messageField);
        adjustCardHeight();
    } else {
        console.error("Element with id 'message' was not found.");
    }

    const form = document.getElementById("contact-form");
    const result = document.getElementById("submission-result");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        const object = {};
        formData.forEach((value, key) => {
            object[key] = value;
        });
        const json = JSON.stringify(object);
        result.innerHTML = "Please wait...";

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status === 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch((error) => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function () {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 5000);
        });
    });

    function cycleImages() {
        const totalImages = carouselImages.length;
        const topMargins = [
            [-200, 20, 20], // margins when the first image is at the top
            [120, 20, -1000], // margins when the second image is at the top
            [485, -1000, 20]  // margins when the third image is at the top
        ];

        // Increment the current index and cycle it through the number of images
        currentIndex = (currentIndex + 1) % totalImages;

        // Apply the top margins and adjust z-index for the images
        carouselImages.forEach((img, index) => {
            let newMarginTop = topMargins[currentIndex][index];

            // Temporarily change z-index for the image that will move to the bottom
            if (newMarginTop === -1000) {
                img.style.zIndex = 0; // Move the bottom image below others
            } else {
                img.style.zIndex = 1; // Ensure the other images are above the bottom image
            }

            // Update the margin-top style with a transition
            img.style.marginTop = `${newMarginTop}px`;

            // After the transition, reset the z-index of the image that moved to the bottom
            setTimeout(() => {
                img.style.zIndex = 1;
            }, 1000); // assuming the transition takes 1 second, adjust as necessary
        });
    }

    // Start the image cycling
    setInterval(cycleImages, 2000); // Adjust timing as necessary
});
