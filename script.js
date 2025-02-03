const manifestUrl = "https://iiif.quartexcollections.com/lse/iiif/cdc85ecf-7862-438b-923c-6c0a2af2c1c7/manifest"; // Replace with your IIIF manifest URL

async function fetchImages() {
    try {
        const response = await fetch(manifestUrl);
        const data = await response.json();

        const gallery = document.getElementById("gallery");
        const images = data.sequences[0].canvases;

        images.forEach((canvas) => {
            const imageUrl = canvas.images[0].resource.service["@id"] + "/full/600,/0/default.jpg";
            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;
            imgElement.alt = canvas.label;

            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.appendChild(imgElement);

            gallery.appendChild(gridItem);
        });

    } catch (error) {
        console.error("Error fetching IIIF images:", error);
    }
}

fetchImages();
