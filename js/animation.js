gsap.from(".logo", {duration: 1, y: -50, opacity: 0, ease: "power2.out"});
gsap.from(".nav-link", {duration: 1, y: -30, opacity: 0, stagger: 0.1, delay: 0.3, ease: "power2.out"});
gsap.from(".content", {duration: 1, y: -30, opacity: 0, stagger: 0.1, delay: 0.3, ease: "power2.out"});



// loading site js
const loaderText = document.querySelector(".loader-text");
const text = loaderText.textContent;
loaderText.textContent = ""; // clear existing

text.split("").forEach(letter => {
  const span = document.createElement("span");
  span.textContent = letter;
  loaderText.appendChild(span);
});

// Animate with GSAP
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
      }
    });
  }
});


// animation text with scrolling
gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('section.horizontal');
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
    scrub: true,
    // markers: true 
  }
});