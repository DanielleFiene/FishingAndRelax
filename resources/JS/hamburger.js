  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger-icon');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('open');
    });

    // Sluit het menu als je ergens anders klikt
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('open');
      }
    });
  });

