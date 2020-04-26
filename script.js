// função tabnav (menu imgs) isolada 
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  
  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
      
    function activeTab(index) {
      tabContent.forEach(section => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }
    
    tabMenu.forEach((itemMenu, indexMenu) => {
      itemMenu.addEventListener('click', () => {
        activeTab(indexMenu);
      })
    })
  }
}

initTabNav(); // ativando a função tabnav




// função accordion (faq) isolada 
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    
    function activeAccordion() {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass);
    }
    
    accordionList.forEach(item => {
      item.addEventListener('click', activeAccordion)
    })
  }
}

initAccordion(); // // aativando a função accordion




// função scroll suave isolada 
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  
  function scrollToSection(event) {
    event.preventDefault()
  
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
  
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    })
  
    // forma alternativa
    // section.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start'
    // });
  }
  
  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
}  

initScrollSuave(); // ativando a função scroll suave




// isolando a função para animar ao scroll
function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {    
    const windowMetade = window.innerHeight * 0.8;
    function animaScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade)<0; // etorna boolean
        if (isSectionVisible) {
          section.classList.add('ativo')
        } 
        // repetir a animação quando subir ao topo
        // else {
        //   section.classList.remove('ativo')
        // }
      })
    }
    
    animaScroll() // ativando a função para já funcionar com a primeira seção
    
    window.addEventListener('scroll', animaScroll)
  }
}

initAnimacaoScroll() // ativando a função de animar ao scroll que foi isolada