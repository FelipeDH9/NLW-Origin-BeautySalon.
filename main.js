//abre e fecha menu quando clica no icone: hamburguer e X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  //o element esta "ouvindo" o evento 'click' e assim ele fara a function anonima
  element.addEventListener('click', function () {
    //quando o element receber o evento 'click', ele ira na lista de classes do NAV, e vai trocar o SHOW, caso ja tenha ele ira tirar, e se nao tiver ele vai colocar, essa é a função do TOGGLE
    nav.classList.toggle('show')
  })
}

//quando clicar num item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//mudar o header da pagina quando der scroll

const header = document.querySelector('#header')
const navheight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navheight) {
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

/*Testimonials carousel or slider swiper*/
const swiper = new Swiper('.swiper', {
  slidesperview: 2,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//SCROLLREVEAL: mostrar elementos quando der scroll na pagina
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '25px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Botão voltar para o topo
  /* back-to-top*/
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
  if (window.scrollY >= 4200) {
    backToTopButton.classList.add('alt')
  } else {
    backToTopButton.classList.remove('alt')
  }
}

/*Menu ativo conforme a seção visivel na pagina*/
const sections = document.querySelectorAll('main section[id]')
/*com o querySelectorAll, vai buscar dentro do main todas as sections que tem um ID*/
function activeteMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector(
          'nav ul li a[href*=' + sectionId + ']'
        ) /* Usou o nav ul li a[href]*= para selecionar o a na lista de menu que tinha href /// Usa o +...+ para concatenar o a que pegamos mais o ID que ele vai buscar, assim ira mudar sempre o id que ele ta concatenando /// */
        .classList.add(
          'active'
        ) /*E ira adicionar na lista de classe que tinha aquele id a classe 'active' */
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove(
          'active'
        ) /*ira remover o active da classe das seções que nao estiverem  no checkpoint*/
    }
  }
}

//WHEN SCROLL, ELE IRA FAZER TUDO RELACIONADO AO SCROLL, MUDAR O HEADER E A SETA DE SUBIR
//onde vai fazer a ação? na janela toda, ou seja,   WINDOW
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activeteMenuAtCurrentSection()
})
