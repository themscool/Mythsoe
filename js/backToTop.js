 document.addEventListener('DOMContentLoaded', () => {
      const buttons = document.querySelectorAll('.scroll-to-top');
      buttons.forEach(button => {
        const progressCircle = button.querySelector('.progress-ring');
        const radius = 25;
        const circumference = 2 * Math.PI * radius;

        function updateProgress() {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = Math.min(scrollTop / docHeight, 1);
          const offset = circumference - scrollPercent * circumference;
          progressCircle.style.strokeDashoffset = offset;
        }

        button.addEventListener('click', () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('scroll', updateProgress);
        updateProgress();
      });
    });