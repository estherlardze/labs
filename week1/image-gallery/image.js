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
    p.textContent = image.caption;
    anchor.append(img, p);
    imageContainer.appendChild(anchor);

    // add event listener to anchor
    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      openLightbox(index);
    });
  });
}

function openLightbox(index) {
  const lightbox = document.createElement("article");
  const closeButton = document.createElement("div");
  closeButton.classList.add("lightbox-close");
  closeButton.textContent = "X";

  lightbox.classList.add("lightbox-overlay");
   lightbox.innerHTML = `
        <a class="img-figure">
          <img
            src= ${galleryImages[index].imageURL}
            alt=${galleryImages[index].caption}
            class="lightbox-image"
          />
          <p>${galleryImages[index].caption}</p>
        </a>

        <div class="next-previous">
          <button class="left">previous</button>
          <button class="right">next</button>
        </div>
   `

  document.body.append(closeButton, lightbox);

  closeButton.addEventListener("click", closeLightbox);

  const next = lightbox.querySelector('.right');
  const previous = lightbox.querySelector('.left');

  next.addEventListener('click', () => navigateImage(index +  1));
  previous.addEventListener('click', () => navigateImage(index - 1));
}

function closeLightbox() {
  const lightbox = document.querySelector(".lightbox-overlay");
  const closeButton = document.querySelector(".lightbox-close");

  if(lightbox && closeButton){
    lightbox.remove();
    closeButton.remove();
  }
  
}


function navigateImage(newIndex){
  if(newIndex > galleryImages.length - 1){
    newIndex = 0;
    }else if(newIndex < 0){
    newIndex = galleryImages.length - 1;
    }
    
  closeLightbox();  
  openLightbox(newIndex);

}

createImage();
