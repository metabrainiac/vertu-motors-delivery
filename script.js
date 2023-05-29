/* Dropdown */
function changeDropdown(dropdownId) {
  const targetedDropdown = document.getElementById(dropdownId);
  const dropdownItems = document.getElementsByClassName('nav-dropdown-content');

  Array.from(dropdownItems).forEach((openDropdown) => {
    if (openDropdown.classList.contains('show') && openDropdown !== targetedDropdown) {
      openDropdown.classList.remove('show');
    }
  });

  targetedDropdown.classList.toggle('show');
}

function closeDropdownMenus(event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdownItems = document.getElementsByClassName('nav-dropdown-content');

    Array.from(dropdownItems).forEach((openDropdown) => {
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    });
  }
}

window.onclick = closeDropdownMenus;


/* Hamburger Menu */
const toggleNavbar = document.querySelector('.menu-icon');
const navMobile = document.querySelector('.navbar-mobile');
const screenSizeMobile = 768;

toggleNavbar.addEventListener('click', () => {
  navMobile.classList.toggle('show');
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.navbar')) {
    navMobile.classList.remove('show');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= screenSizeMobile) {
    navMobile.classList.remove('show');
  }
});


/* Carousel */
const slider = document.querySelector('.card-wrapper');
const cards = document.querySelectorAll('.item');
const btnLeft = document.querySelector('.carousel-left');
const btnRight = document.querySelector('.carousel-right');

let scrollPosition = 0;
const cardWidth = cards[0].getBoundingClientRect().width + 10;

const scrollToPosition = (position) => {
  slider.scrollTo({
    left: position,
    behavior: 'smooth',
  });
};

btnRight.addEventListener('click', () => {
  const maxScroll = slider.scrollWidth - slider.clientWidth;
  if (scrollPosition + cardWidth * 3 <= maxScroll) {
    scrollPosition += cardWidth * 3;
    btnLeft.style.display = 'block';
  } else {
    scrollPosition = 0;
    btnLeft.style.display = 'none';
  }
  scrollToPosition(scrollPosition);
});

btnLeft.addEventListener('click', () => {
  scrollPosition -= cardWidth * 3;
  scrollToPosition(scrollPosition);
  if (scrollPosition === 0) {
    btnLeft.style.display = 'none';
  }
});


/* Responsive Text */
const bannerTextElement = document.getElementById('text-content');

function updateBannerText() {
  const bannerTextMobile = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis';
  const bannerTextDesktop = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  bannerTextElement.innerText = (window.innerWidth < 768) ? bannerTextMobile : bannerTextDesktop;
}

window.addEventListener('resize', updateBannerText);
updateBannerText();


/* Responsive Button Text */
const bannerButtonElement = document.getElementById('button-content');

function updateBannerButtonText() {
  const bannerButtonMobile = 'Book a test drive';
  const bannerButtonDesktop = 'Request a Personalised Video';

  bannerButtonElement.innerText = (window.innerWidth < 768) ? bannerButtonMobile : bannerButtonDesktop;
}

window.addEventListener('resize', updateBannerButtonText);
updateBannerButtonText();
