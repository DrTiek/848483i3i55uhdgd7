document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
          navbar.style.top = '-60px';
      } else {
          navbar.style.top = '0';
      }
      lastScrollTop = scrollTop;
  });
});
