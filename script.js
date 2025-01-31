const manifestUrl = "https://gist.githubusercontent.com/AngusJack/a4e9749e1699ee32563fe865708d7bb4/raw/8641561ae7c9772613dc0db38b0da891157bfbfb/gistfile1.txt"; // Replace with your IIIF manifest URL

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
