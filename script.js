// Carrossel automático
const imagens = [
    'foto1.jpg', 'foto2.jpeg', 'foto3.jpeg', 'foto4.jpeg', 'foto5.jpeg',
    'foto6.jpeg', 'foto7.jpeg', 'foto8.jpeg', 'foto9.jpeg'
  ];
  
  let indice = 0;
  const imgElement = document.getElementById('carrossel-img');
  
  function trocarImagem() {
    indice = (indice + 1) % imagens.length;
    imgElement.src = `imagem/${imagens[indice]}`;
  }
  
  setInterval(trocarImagem, 3000); // troca a cada 3 segundos
  
  // Mostrar carta
  function mostrarCarta() {
    document.getElementById('carta').style.display = 'block';
  }
  
