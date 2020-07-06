import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // Criando a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  // Preenchendo cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Animando os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxando os animais através de um arquivo json
  // Criando cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // Dando o fetch e espera a resposta
      const animaisResponse = await fetch(url);

      // Transformando a resposta em json
      const animaisJSON = await animaisResponse.json();

      // Fazendo o forEach de acordo com os animais presentes na API
      // Ativando a função preencherAmimais()
      animaisJSON.forEach(animal => preencherAnimais(animal));

      // Acionando a função para animar os números
      animaAnimaisNumeros()
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
