tailwind.config = {
    darkMode: 'class', 
};


// header sticky
const headerSticky = document.getElementsByClassName('header');
const stickyClasses = ['sticky', 'top-4', 'bg-white/70', 'dark:bg-[#0D0D0D]/70'];

window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
        stickyClasses.forEach(className => {
            headerSticky[0].classList.add(className);
        });
        gsap.to(headerSticky[0], {
            duration: 0.1,
            width: '72rem', // max-w-6xl equivalent
            borderRadius: 100,
            y: 0,
            opacity: 1,
            ease: "power1.out"
        });
    } else {
        stickyClasses.forEach(className => {
            headerSticky[0].classList.remove(className);
        });
        gsap.to(headerSticky[0], {
            duration: 0.1,
            width: '100%',
            y: 0,
            borderRadius: 0,
            opacity: 0.8,
            ease: "power1.in"
        });
    }
});
gsap.set(headerSticky[0], {
    y: 0,
    opacity: 1,
    width: '100%'
});

// mobile menu
const drawer = document.getElementById('mobileDrawer');
const openBtn = document.querySelector('.mobile-nav');
const closeBtn = document.getElementById('drawerClose');

openBtn.addEventListener('click', () => {
  drawer.classList.remove('hidden');
  gsap.fromTo(drawer, 
    { x: '-100%', opacity: 0 },
    { x: '0%', opacity: 1, duration: 0.4, ease: 'power2.out' }
  );
});

closeBtn.addEventListener('click', () => {
  gsap.to(drawer, {
    x: '-100%',
    opacity: 0,
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => drawer.classList.add('hidden')
  });
});
// search drawer
const searchDrawer = document.getElementById('searchDrawer');
const searchBtn = document.querySelectorAll('.search-open');
const searchCloseBtn = document.getElementById('searchClose');

searchBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    searchDrawer.classList.remove('hidden');
    gsap.fromTo(searchDrawer,
      { x: '100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 0.4, ease: 'power2.out' }
    );
  });
});

searchCloseBtn.addEventListener('click', () => {
  gsap.to(searchDrawer, {
    x: '100%',
    opacity: 0,
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => searchDrawer.classList.add('hidden')
  });
});

// cart drawer
const cartDrawer = document.getElementById('cartDrawer');
  const cartOpenBtn = document.querySelector('.cart-btn'); // Update if needed
  const cartCloseBtn = document.getElementById('cartClose');

  cartOpenBtn.addEventListener('click', (e) => {
    e.preventDefault(); 
    cartDrawer.classList.remove('hidden');
    gsap.fromTo(cartDrawer, 
      { x: '100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 0.4, ease: 'power2.out' }
    );
  });

  cartCloseBtn.addEventListener('click', () => {
    gsap.to(cartDrawer, {
      x: '100%',
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => cartDrawer.classList.add('hidden')
    });
  });


  

// hero slider
const heroSlider = new Swiper('.heroSlider', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // product slider

  const productSlider = new Swiper(".productSlider", {
    slidesPerView: 2,
    spaceBetween: 20,
    centeredSlides: false,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        slidesPerGroup: 2,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// tabs

const tabItems = document.querySelectorAll('.tab-item');
const tabPanes = document.querySelectorAll('.tab-pane');

function clearActive() {
  tabItems.forEach(item => {
    item.classList.remove('text-[#808080]');
    item.classList.add('text-black', 'dark:text-white');
    gsap.to(item, { scale: 1, duration: 0.3, ease: "power2.out" }); // Reset scale
  });

  tabPanes.forEach(pane => {
    pane.classList.add('hidden');
  });
}

tabItems.forEach(item => {
  item.addEventListener('click', () => {
    const tabIndex = item.getAttribute('data-tab');
    const targetPane = document.querySelector(`.tab-pane[data-pane="${tabIndex}"]`);

    clearActive();

    item.classList.remove('text-black', 'dark:text-white');
    item.classList.add('text-[#808080]');

    // Animate tab heading
    gsap.fromTo(item, 
      { scale: 0.9 }, 
      { scale: 1.05, duration: 0.2, ease: "power1.out", onComplete: () => {
          gsap.to(item, { scale: 1, duration: 0.2, ease: "bounce.out" });
      }}
    );

    // Animate content
    targetPane.classList.remove('hidden');
    gsap.fromTo(targetPane, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    );
  });
});

// Set default active tab
tabItems[0].click();
























