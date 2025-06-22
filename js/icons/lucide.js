lucide.createIcons(); 

  // dark and light mode
const toggle = document.getElementById('toggleDark');
  
toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
  if(document.documentElement.classList.contains('dark')){
    toggle.innerHTML = `<span class="text-[var(--color-light)]"><i data-lucide="sun-moon"></i></span>`;
    lucide.createIcons();
  } else {
    toggle.innerHTML = `<span class="text-[var(--color-light)]"><i data-lucide="sun"></i></span>`;
    lucide.createIcons();
  }
});


const savedDarkMode = localStorage.getItem('darkMode') === 'true';
if (savedDarkMode) {
  document.documentElement.classList.add('dark');
  toggle.innerHTML = `<span class="text-[var(--color-light)]"><i data-lucide="sun-moon"></i></span>`;
  lucide.createIcons();
} else {
  toggle.innerHTML = `<span class="text-[var(--color-light)]"><i data-lucide="sun"></i></span>`;
  lucide.createIcons();
}
