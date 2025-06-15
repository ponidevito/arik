// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();


document.addEventListener('DOMContentLoaded', function () {
  const submenuLink = document.querySelector('.menu__item-link.sub');
  const submenu = submenuLink.nextElementSibling;

  submenuLink.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    // Перемикання submenu
    submenu.classList.toggle('active');
    submenuLink.classList.toggle('active'); // додаємо клас до лінку для анімації
  });

  // Закриває submenu при кліку поза меню
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.menu__item-link.sub') && !e.target.closest('.submenu')) {
      submenu.classList.remove('active');
      submenuLink.classList.remove('active'); // знімаємо обертання
    }
  });
});




