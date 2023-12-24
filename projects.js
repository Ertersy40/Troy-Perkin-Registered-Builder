document.addEventListener("DOMContentLoaded", function() {
    loadImages();
});

let currentImageIndex = 0; // Global variable to track current image
let imageInfo = []; // Assuming this will be populated by fetchImages()

function showModalImage() {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const image = imageInfo[currentImageIndex];

    modal.style.display = "block";
    modalImg.src = `/project_images/${image.name}`;
    captionText.innerHTML = image.description;
}

function changeImage(step) {
    currentImageIndex += step;
    if (currentImageIndex >= imageInfo.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = imageInfo.length - 1;
    }
    showModalImage();
}

function loadImages() {
    fetchImages().then(images => {
        const imageGrid = document.getElementById('image-grid');
        images.forEach(image => {
            // Create a container for each image and its description
            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container';

            // Add the image
            const imgElement = document.createElement('img');
            imgElement.src = `/project_images/${image.name}`;
            imgElement.onclick = function() {
                openModal(image);
            };
            imageContainer.appendChild(imgElement);

            // Add the description
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = image.description;
            imageContainer.appendChild(descriptionElement);

            // Append the container to the grid
            imageGrid.appendChild(imageContainer);
            
        });
    });
}

// Dummy function, replace with your actual image fetching logic
function fetchImages() {
    imageInfo = [{
        name: 'image_1.jpg',
        description: 'This is a very cool image of my build. Lorem ipsum dolor sit amet'
    }, {
        name: 'image_2.jpg',
        description: 'This is a very cool image of my build. Lorem ipsum dolor sit amet'
    }, {
        name: 'image_3.jpg',
        description: 'This is a very cool image of my build. Lorem ipsum dolor sit amet'
    }, {
        name: 'image_4.jpg',
        description: 'This is a very cool image of my build. Lorem ipsum dolor sit amet'
    }, {
        name: 'image_5.jpg',
        description: 'This is a very cool image of my build. Lorem ipsum dolor sit amet'
    }, {
        name: 'image_6.jpg',
        description: 'This is a very cool image of my build. Lorem ipsum dolor sit amet'
    }, {
        name: 'image_7.jpg',
        description: 'This is a very cool image of my build. Lorem ipsum dolor sit amet'
    }, {
        name: 'image_8.jpg',
        description: 'This is a very cool image of my build. Lorem ipsum dolor sit amet'
    }, {
        name: 'image_9.jpg',
        description: 'This is a very cool image of my build. Lorem ipsum dolor sit amet'
    }, {
        name: 'image_10.jpg',
        description: 'This is a very cool image of my build. Lorem ipsum dolor sit amet'
    }, {
        name: 'image_11.jpg',
        description: 'This is a very cool image of my build. Lorem ipsum dolor sit amet'
    }, {
        name: 'image_12.jpg',
        description: 'This is a very cool image of my build. Lorem ipsum dolor sit amet'
    }]
    return Promise.resolve(imageInfo); // Replace with actual image names
}


function openModal(image) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = `/project_images/${image.name}`;
    captionText.innerHTML = image.description;

    // Close modal when clicking on the close button
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }

    // Close modal when clicking anywhere outside the image
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}