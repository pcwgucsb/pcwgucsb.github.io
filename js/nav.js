// Nav: mark active link
(function () {
  const path = window.location.pathname.replace(/\/$/, '') || '/index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '');
    if (
      path === href ||
      (href !== '' && href !== '/index.html' && path.startsWith(href))
    ) {
      a.classList.add('active');
    }
    // Root
    if ((path === '' || path === '/index.html' || path === '/') && href === 'index.html') {
      a.classList.add('active');
    }
  });

  // Hamburger
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
})();
