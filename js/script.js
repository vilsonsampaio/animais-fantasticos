import initTabNav from './modules/tab-nav.js';
import initAccordion from './modules/accordion.js';
import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/animacao-scroll.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

initTabNav();

initAccordion();

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();

initModal();

initTooltip();

initDropdownMenu();

initMenuMobile();

initFuncionamento();

initFetchAnimais();

initFetchBitcoin();
