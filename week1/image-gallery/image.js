const galleryImages = [
  {
    thumbnailURL: "./images/image-1.jpg",
    imageURL: "./images/image-1.jpg",
    caption: "Image of a laptop",
  },
  {
    thumbnailURL: "./images/image-2.jpg",
    imageURL: "./images/image-2.jpg",
    caption: "Image of a woman with a laptop",
  },
  {
    thumbnailURL: "./images/image-3.jpg",
    imageURL: "./images/image-3.jpg",
    caption: "Mountain landscape",
  },
  {
    thumbnailURL: "./images/image-4.jpg",
    imageURL: "./images/image-4.jpg",
    caption: "City skyline",
  },
  {
    thumbnailURL: "./images/image-5.jpg",
    imageURL: "./images/image-5.jpg",
    caption: "Forest path",
  },
  {
    thumbnailURL: "./images/image-6.jpg",
    imageURL: "./images/image-6.jpg",
    caption: "Beach at sunset",
  },
  {
    thumbnailURL: "./images/image-7.jpg",
    imageURL: "./images/image-7.jpg",
    caption: "Snowy mountains",
  },
  {
    thumbnailURL: "./images/image-8.jpg",
    imageURL: "./images/image-8.jpg",
    caption: "Desert dunes",
  },
  {
    thumbnailURL: "./images/image-9.jpg",
    imageURL: "./images/image-9.jpg",
    caption: "Waterfall",
  },
  {
    thumbnailURL: "./images/image-10.jpg",
    imageURL: "./images/image-10.jpg",
    caption: "Bird in flight",
  },
  {
    thumbnailURL: "./images/image-11.jpg",
    imageURL: "./images/image-11.jpg",
    caption: "Close-up of leaves",
  },
  {
    thumbnailURL: "./images/image-12.jpg",
    imageURL: "./images/image-12.jpg",
    caption: "Night sky with stars",
  },
];

const imageContainer = document.querySelector(".images-container");

function createImage() {
  galleryImages.forEach((image, index) => {
    const anchor = document.createElement("a");
    const img = document.createElement("img");
    const p = document.createElement("p");

    img.src = image.thumbnailURL;
    img.alt = image.caption;
    anchor.href = image.imageURL;
    anchor.target = "_blank";
    p.textContent = image.caption;
    anchor.append(img, p);
    imageContainer.appendChild(anchor);

    // add event listener to anchor
    anchor.addEventListener("click", openLightbox);
  });
}

function openLightbox(index) {
  const lightbox = document.createElement("article");
  const closeButton = document.createElement("div");

  lightbox.classList.add("lightbox-overlay");
  closeButton.textContent = "X";

  lightbox.append(closeButton);

  galleryImages.forEach((image, i) => {
    const img = document.createElement("img");
    img.src = image.imageURL;
    img.alt = image.caption;

    if (i === index) {
      lightbox.append(img);
    }
  });

  document.body.append(lightbox);

  closeButton.addEventListener("click", closeLightbox);
}

createImage();
