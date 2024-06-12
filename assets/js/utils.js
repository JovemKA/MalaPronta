function formatDate(date) {
  // Função para formatar datas
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("pt-BR", options);
}

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const close = document.querySelector(".close");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let currentIndex = 0;

galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentIndex = index;
    showLightbox(image.src);
  });
});

function showLightbox(src) {
  lightboxImage.src = src;
  lightbox.style.display = "block";
}

close.addEventListener("click", () => {
  lightbox.style.display = "none";
});

prev.addEventListener("click", () => {
  currentIndex =
    currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
  lightboxImage.src = galleryImages[currentIndex].src;
});

next.addEventListener("click", () => {
  currentIndex =
    currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
  lightboxImage.src = galleryImages[currentIndex].src;
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const breadcrumbContainer = document.getElementById("breadcrumb-container");
  if (breadcrumbContainer) {
    breadcrumbContainer.innerHTML = `
          <div class="breadcrumb">
              <nav aria-label="breadcrumb">
                  <ul class="breadcrumb-list">
                      <li class="breadcrumb-item"><a href="/">Mala Pronta</a></li>
                      <li class="breadcrumb-separator">/</li>
                      <li class="breadcrumb-item"><a href="/destinos.html">Destinos</a></li>
                      <li class="breadcrumb-separator">/</li>
                      <li class="breadcrumb-item active" aria-current="page">Foz do Iguaçu</li>
                  </ul>
              </nav>
          </div>
      `;
  }
});
