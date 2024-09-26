const texts = ["Marcas inesquecíveis!", "Sites de alta performance!"];
let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;
let speed = 150; // Velocidade de digitação e deleção

function type() {
  currentText = texts[count]; // Define o texto atual

  // Se estamos apagando, remover uma letra
  if (isDeleting) {
    index--;
    document.getElementById('changing-text').textContent = currentText.slice(0, index);
  } 
  // Se estamos digitando, adicionar uma letra
  else {
    index++;
    document.getElementById('changing-text').textContent = currentText.slice(0, index);
  }

  // Se o texto foi completamente digitado
  if (!isDeleting && index === currentText.length) {
    setTimeout(() => {
      isDeleting = true; // Começa a apagar após uma pausa de 2 segundos
    }, 1000); // Pausa de 2 segundos ao terminar de digitar
  }

  // Se o texto foi completamente apagado
  if (isDeleting && index === 0) {
    isDeleting = false; // Volta para o modo de digitação
    count = (count + 1) % texts.length; // Passa para o próximo texto
  }

  // Ajusta a velocidade de digitação e deleção
  let typingSpeed = isDeleting ? 100 : speed; // Apagar é mais rápido

  // Repetição da função
  setTimeout(type, typingSpeed);
}

// Inicia o efeito de digitação
type();
