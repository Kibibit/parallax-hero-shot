// Define the original widths of the images
const imageSizes = {
    'far-clouds': 128,   // example size
    'near-clouds': 144,  // example size
    'far-mountains': 160, // example size
    'mountains': 320,    // example size
    'trees': 240         // example size
};

const height = 240;

// Get the container (parallax element)
const parallax = document.querySelector('.parallax');

// Function to calculate the ratio and set CSS custom properties
function calculateScrollRatios() {
    const containerWidth = parallax.offsetWidth; // Get the current container width
    const containerHeight = parallax.offsetHeight; // Get the current container height

    // Loop over each layer and calculate the ratio
    document.querySelectorAll('.layer').forEach(layer => {
        const layerClass = Array.from(layer.classList).find(cls => imageSizes[cls]);
        if (layerClass) {
            // calculate width of image based on container height
            const ratio = containerHeight / height;
            const actualImageWidth = imageSizes[layerClass] * ratio;
            // const imageWidth = imageSizes[layerClass]; // Get the corresponding image width
            // const ratio = imageWidth / containerWidth; // Calculate the ratio
            layer.style.setProperty('--scroll-width', `${ Math.floor(actualImageWidth) }px`);
        }
    });
}

// Call the function on page load and on window resize
window.addEventListener('load', calculateScrollRatios);
window.addEventListener('resize', calculateScrollRatios);