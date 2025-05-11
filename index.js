const images = ["imagens/clarinha.jpg", "imagens/clarinha2.jpg", "imagens/clara2.jpg","imagens/holanda.jpg"]; // Substitua pelos nomes reais das suas imagens
let current = 0;

function showImage(index) {
  const img = document.getElementById("carousel-image");
  img.src = images[index];
}

function nextSlide() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

// Inicializa com a primeira imagem
showImage(current);

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
  
    petal.style.left = Math.random() * window.innerWidth + 'px';
    petal.style.animationDuration = (5 + Math.random() * 5) + 's';
  
    document.querySelector('.petals-container').appendChild(petal);
  
    setTimeout(() => {
      petal.remove();
    }, 10000);
  }
  
  setInterval(createPetal, 300);
  
