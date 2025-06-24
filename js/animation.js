const homeAnimation = document.body.id;
if (homeAnimation === 'home') {
  // loading site js
  gsap.registerPlugin(ScrollTrigger);
  // animation text with scrolling
  const section = document.querySelector('.horizontal');
  const pinWrap = section.querySelector('.pin-wrap');
  const animWrap = pinWrap.querySelector('.animation-wrap');

  gsap.fromTo(animWrap, {
    x: 0,
  }, {
    x: () => -(animWrap.scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top bottom",
      end: () => "+=" + (animWrap.scrollWidth - window.innerWidth),
      scrub: 1.5,
      // markers: true 
    }
  });
}

// Loader animation
const loaderText = document.querySelector(".loader-text");
const text = loaderText.textContent;
loaderText.textContent = "";

text.split("").forEach(letter => {
  const span = document.createElement("span");
  span.textContent = letter;
  loaderText.appendChild(span);
});

gsap.to(".loader-text span", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power4.out",
  stagger: 0.15,
  onComplete: () => {
    gsap.to(".loader", {
      opacity: 0,
      delay: 0.5,
      duration: 0.8,
      onComplete: () => {
        document.querySelector(".loader").style.display = "none";
        //  start animation all content after loading
        gsap.from(".logo", {
          scrollTrigger: {
            trigger: ".logo",
            start: "top 80%",// when top of .logo hits 80% of viewport
          },
          duration: 1,
          y: -50,
          opacity: 0,
          ease: "power2.out"
        });

        gsap.from(".nav-link", {
          scrollTrigger: {
            trigger: ".nav-link", // or a wrapper if you have multiple
            start: "top 90%",
          },
          duration: 1,
          y: -30,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out"
        });

        gsap.from(".content", {
          scrollTrigger: {
            trigger: ".content",
            start: "top 85%",
          },
          duration: 1,
          y: -30,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out"
        });
        gsap.from(".horizontal", { // fading horizonatal text sections
          scrollTrigger: {
            trigger: ".horizontal",
            start: "top 80%",
            toggleActions: "restart"
          },
          duration: 1.5,
          y: -30,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out"
        });
        gsap.from(".anime_text, .sbrand", {
          scrollTrigger: {
            trigger: ".product-ad",
            start: "top 85%",
            toggleActions: "restart"
          },
          duration: 1.5,
          y: -30,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out"
        });
        gsap.from(".product_text, .product-item", {
          scrollTrigger: {
            trigger: ".product-item, .product_text",
            start: "top 85%",
            toggleActions: "restart"
          },
          duration: 1.5,
          x: -30,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out"
        });
        gsap.from(".about_text, .about_title, .about_btn, .about_logo", {
          scrollTrigger: {
            trigger: ".about_text, .about_title, .about_btn, .about_logo",
            start: "top 85%",
            toggleActions: "restart"
          },
          duration: 1.5,
          x: -30,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out"
        });
        gsap.from(".about_line, .about_tab_title, .about_pane", {
          scrollTrigger: {
            trigger: ".about_line, .about_tab_title, .about_pane",
            start: "top 85%",
            toggleActions: "restart"
          },
          duration: 1.5,
          y: -30,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out"
        });
        gsap.from(".news_text, .news_title", {
          scrollTrigger: {
            trigger: ".news_text, .news_title",
            start: "top 85%",
            toggleActions: "restart"
          },
          duration: 1.5,
          y: -30,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out"
        });
      }
    });
  }
});





