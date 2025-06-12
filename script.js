// ===== Dark Mode Toggle =====
const toggleTheme = () => {
    const body = document.body;
    const currentTheme = body.dataset.theme;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
    body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
  };
  
  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.dataset.theme = savedTheme;
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
  
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Theme';
    toggleButton.className = 'theme-toggle';
    toggleButton.addEventListener('click', toggleTheme);
  
    document.querySelector('header .container').appendChild(toggleButton);
  });
  
  // ===== Smooth Scroll =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // ===== Scroll-to-top Button =====
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.innerHTML = '⬆';
  scrollTopBtn.className = 'scroll-top';
  scrollTopBtn.style.display = 'none';
  document.body.appendChild(scrollTopBtn);
  
  window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  