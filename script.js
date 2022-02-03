const menuIconBtn = document.querySelector('[data-menu-icon-btn]');
const sidebar = document.querySelector('[data-sidebar]');

menuIconBtn.addEventListener('click', function () {
  // Open/Close Sidebar
  sidebar.classList.toggle('open');
});
