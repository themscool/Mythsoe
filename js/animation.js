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
const horizontalSections = gsap.utils.toArray('section.horizontal')

horizontalSections.forEach(function (sec, i) {	
  
  var thisPinWrap = sec.querySelector('.pin-wrap');
  var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap');
  
  var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth); 

  gsap.fromTo(thisAnimWrap, { 
    x: () => thisAnimWrap.classList.contains('to-right') ? 0 : getToValue() 
  }, { 
    x: () => thisAnimWrap.classList.contains('to-right') ? getToValue() : 0, 
    ease: "none",
    scrollTrigger: {
      trigger: sec,		
      start: "top top",
      end: () => "+=" + (thisAnimWrap.scrollWidth - window.innerWidth),
      pin: thisPinWrap,
      invalidateOnRefresh: true,
      // anticipatePin: 1,
      scrub: true,
      markers: true,
    }
  });

});	