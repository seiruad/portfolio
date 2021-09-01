const toggleScroll = () => {
  document.body.classList.toggle('hide-scrolling');
}

const showScroll = () => {
  document.body.classList.remove('hide-scrolling');
}

const hideScroll = () => {
  document.body.classList.add('hide-scrolling');
}

const toggleNavbar = () => {
  document.querySelector('.header').classList.toggle('active');
}


/* ---------------- Navbar ---------------- */
const hideSection = () => {
  document.querySelector('.section.active').classList.toggle('fade-out');
}

const navToggler = document.querySelector('.nav-toggler');
navToggler.addEventListener('click', () => {
  hideSection();
  toggleNavbar();
  toggleScroll();

})


/* ---------------- Active Section ---------------- */
document.addEventListener('click', e => {
  if (e.target.classList.contains('link-item') && e.target.hash !== '') {
    // overlay exist to prevent multiple clicks
    document.querySelector('.overlay').classList.add('active');

    navToggler.classList.add('hide')
    e.preventDefault()
    const hash = e.target.hash;
    if (e.target.classList.contains('nav-link')) {
      toggleNavbar();
    } else {
      hideSection();
      hideScroll();

    }

    setTimeout(() => {
      document.querySelector('.section.active').classList.remove('active', 'fade-out');
      document.querySelector(hash).classList.add('active');
      window.scrollTo(0, 0);
      showScroll();
      navToggler.classList.remove('hide');
      document.querySelector('.overlay').classList.remove('active');

    }, 500)

  }
})


/* ---------------- About Tabs ---------------- */
const tabsContainer = document.querySelector('.about-tabs');
const aboutSection = document.querySelector('.about-section');

tabsContainer.addEventListener('click', e => {
  if (e.target.classList.contains('tab-item') && !e.target.classList.contains('active')) {
    tabsContainer.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    const target = e.target.getAttribute('data-target');
    aboutSection.querySelector('.tab-content.active').classList.remove('active');
    aboutSection.querySelector(target).classList.add('active');
  }
})


/* ---------------- Portfolio Item Popup ---------------- */
const togglePortfolioPopup = () => {
  document.querySelector('.portfolio-popup').classList.toggle('open');
  toggleScroll();
  document.querySelector('.main').classList.toggle('fade-out')
}

const copyItemInfo = (portfolioItem) => {
  document.querySelector('.pp-thumbnail img').src = portfolioItem.querySelector('.portfolio-item-thumbnail img').src;
  document.querySelector('.pp-header h3').innerHTML = portfolioItem.querySelector('.portfolio-item-title').innerHTML;
  document.querySelector('.pp-body').innerHTML = portfolioItem.querySelector('.portfolio-item-details').innerHTML;

}

document.addEventListener('click', e => {
  if (e.target.classList.contains('btn-view-project')) {
    togglePortfolioPopup();
    document.querySelector('.portfolio-popup').scrollTo(0,0);
    copyItemInfo(e.target.parentElement);
  }
})

document.querySelector('.pp-close').addEventListener('click', _ => togglePortfolioPopup());


//  hide popup when click outside
document.addEventListener('click', e => {
  if (e.target.classList.contains('pp-inner')) {
    togglePortfolioPopup();
  }
})


document.querySelector('.home-section').classList.add('active')
