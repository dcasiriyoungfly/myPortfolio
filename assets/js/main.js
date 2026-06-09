/*=============== SHOW MENU ===============*/
const navMenu   = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose  = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

/*=============== HOME TYPED JS ===============*/
const typed = new Typed('.home__typed', {
  strings: [
    'Full-Stack Developer',
    'Flutter Developer',
    'Cyber Risk Analyst',
    'IT Professional',
  ],
  typeSpeed:    60,
  backSpeed:    40,
  backDelay:    2000,
  startDelay:   500,
  loop:         true,
  smartBackspace: true,
});

/*=============== ADD SHADOW HEADER ===============*/
const header = document.getElementById('header');

const shadowHeader = () => {
  if (window.scrollY >= 50) {
    header.classList.add('shadow-header');
  } else {
    header.classList.remove('shadow-header');
  }
};

window.addEventListener('scroll', shadowHeader);

/*=============== CONTACT EMAIL JS ===============*/
// To enable the contact form:
// 1. Sign up at https://www.emailjs.com (free plan works)
// 2. Create a service, email template, and copy your Public Key
// 3. Replace the placeholders below with your actual values

const EMAILJS_PUBLIC_KEY  = 'U_6qrddwOKSz-hjCn';
const EMAILJS_SERVICE_ID  = 'service_7h2sj0g';
const EMAILJS_TEMPLATE_ID = 'wmdj3hy';

if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
  emailjs.init(EMAILJS_PUBLIC_KEY);

  const contactForm    = document.getElementById('contact-form');
  const contactMessage = document.getElementById('contact-message');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector('.contact__button');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, contactForm)
      .then(() => {
        contactMessage.textContent = 'Message sent successfully!';
        contactMessage.classList.add('success');
        contactForm.reset();
        btn.innerHTML = 'Send Message <i class="ri-send-plane-line"></i>';
        btn.disabled = false;
        setTimeout(() => {
          contactMessage.textContent = '';
          contactMessage.classList.remove('success');
        }, 4000);
      })
      .catch(() => {
        contactMessage.textContent = 'Something went wrong. Please try again.';
        contactMessage.classList.add('error');
        btn.innerHTML = 'Send Message <i class="ri-send-plane-line"></i>';
        btn.disabled = false;
        setTimeout(() => {
          contactMessage.textContent = '';
          contactMessage.classList.remove('error');
        }, 4000);
      });
  });
}

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = document.getElementById('scroll-up');

const showScrollUp = () => {
  if (window.scrollY >= 350) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
};

window.addEventListener('scroll', showScrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop    = section.offsetTop - 100;
    const sectionId     = section.getAttribute('id');
    const link          = document.querySelector(`.nav__link[href="#${sectionId}"]`);

    if (link) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    }
  });
};

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin:   'bottom',
  distance: '60px',
  duration: 1000,
  delay:    200,
  reset:    false,
});

// Home
sr.reveal('.home__data',  { origin: 'left' });
sr.reveal('.home__image', { origin: 'right', delay: 400 });

// About
sr.reveal('.about__description', { delay: 200 });
sr.reveal('.about__skills-title', { delay: 300 });
sr.reveal('.about__skill-card',  { interval: 80, delay: 350 });

// Projects
sr.reveal('.project__card', { interval: 150, delay: 200 });

// Resume
sr.reveal('.resume__column', { interval: 200, delay: 200 });
sr.reveal('.resume__cert-card', { interval: 120, delay: 300 });

// Contact
sr.reveal('.contact__info',    { origin: 'left',  delay: 200 });
sr.reveal('.contact__form',    { origin: 'right', delay: 300 });
sr.reveal('.contact__info-card', { interval: 100, delay: 250 });

// Section titles
sr.reveal('.section__title', { delay: 100, distance: '30px' });
