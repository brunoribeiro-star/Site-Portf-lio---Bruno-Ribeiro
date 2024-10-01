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


document.addEventListener('scroll', function() {
  const steps = document.querySelectorAll('.roadmap-step');
  const line = document.querySelector('.roadmap-line');
  
  let activeSteps = 0;

  steps.forEach((step, index) => {
    const rect = step.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Verifica se a bolinha está visível dentro do viewport
    if (rect.top <= windowHeight * 0.75) {
      step.classList.add('active');
      activeSteps = index + 1; // Número de etapas ativas
    } else {
      step.classList.remove('active');
    }
  });

  // Ajusta a altura da linha com base no número de bolinhas ativas
  if (activeSteps > 0) {
    const firstStepTop = steps[0].getBoundingClientRect().top;
    const lastStepTop = steps[steps.length - 1].getBoundingClientRect().top;
    
    // Calcula a altura correta da linha até a última bolinha
    const maxHeight = lastStepTop - firstStepTop;
    const percentage = activeSteps / steps.length;
    
    // Ajusta a altura da linha, limitando até a última bolinha
    line.style.height = `${Math.min(percentage * maxHeight, maxHeight)}px`;
    line.style.backgroundColor = 'var(--purple1-color)';
  } else {
    line.style.height = '0'; // Linha inicial com altura zero
  }

  // Garantir que a última bolinha (quarta) fique preenchida corretamente
  if (activeSteps === steps.length) {
    steps[steps.length - 1].classList.add('active');
  }
});





