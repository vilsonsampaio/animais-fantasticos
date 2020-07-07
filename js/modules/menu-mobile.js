import outsideClick from './outsideclick.js';

export default class MenuMobile {
  constructor(menuButton, menuList, arrayEventos) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    // Define touchstart e click como argumento padrão de arrayEventos, caso usuário não defina
    if (arrayEventos === undefined) this.arrayEventos = ['touchstart', 'click'];
    else this.arrayEventos = arrayEventos;

    this.activeClass = 'active';
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    // Corrigindo o bug que dá ao abrir o menu-mobile
    event.preventDefault();

    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.arrayEventos, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.arrayEventos.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
