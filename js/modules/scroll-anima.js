export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.8;

    // Fazendo o bind para se referir o objeto da classe ao chamar o callback
    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pega a distância de cada ítem em relação ao topo do site
  getDistance() {
    // Transformando o sections em uma array com o método de desestructuring para poder usar o map
    // Guardando esse valor numa variável
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Verifica a distância em cada objeto em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((section) => {
      if (window.pageYOffset > section.offset) {
        section.element.classList.add('ativo');
      }
      // Repetindo a animação ao sair da seção. Caso não queira, é só comentar o código a seguir
      else if (section.element.classList.contains('ativo')) {
        section.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Removendo o event do scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
