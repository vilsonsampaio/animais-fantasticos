export default class initTabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  // Ativando a tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  // Adicionando os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, indexMenu) => {
      itemMenu.addEventListener('click', () => this.activeTab(indexMenu))
    })
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // Ativando primeiro ítem
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}

