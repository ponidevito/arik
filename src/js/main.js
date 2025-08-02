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

document.addEventListener("DOMContentLoaded", function () {
  // submenu
  const submenuLink = document.querySelector(".menu__item-link.sub");
  const submenu = submenuLink.nextElementSibling;

  submenuLink.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    // Перемикання submenu
    submenu.classList.toggle("active");
    submenuLink.classList.toggle("active"); // додаємо клас до лінку для анімації
  });

  document.addEventListener("click", function (e) {
    if (
      !e.target.closest(".menu__item-link.sub") &&
      !e.target.closest(".submenu")
    ) {
      submenu.classList.remove("active");
      submenuLink.classList.remove("active"); // знімаємо обертання
    }
  });

  // infiniti text
  const content = document.querySelector(".talk__content");
  const item = content.querySelector(".talk__item");

  const clone = item.cloneNode(true);
  content.appendChild(clone);

  const itemWidth = item.offsetWidth;

  gsap.to(content, {
    x: `-=${itemWidth}`,
    duration: 35,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % itemWidth),
    },
  });

  // infiniti text for about section arik andersson text
   if (window.location.pathname.includes("/index")) {
  const wrapper = document.querySelector(".ticker__wrapper");
  const itemsAuthor = wrapper.querySelector(".ticker__item");

  const repeatCount = Math.ceil(window.innerWidth / (itemsAuthor.offsetWidth + 580)) + 2;

  for (let i = 1; i < repeatCount; i++) {
    const clone = itemsAuthor.cloneNode(true);
    wrapper.appendChild(clone);
  }

  const fullWidth = wrapper.offsetWidth;

  gsap.to(wrapper, {
    x: `-=${itemsAuthor.offsetWidth + 580}`,
    duration: 15,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % (itemsAuthor.offsetWidth + 580)),
    },
  });
   }

  

  function numCounter(selector, number, time, step, options = {}) {
    const counter = document.querySelector(selector);
    if (!counter) return;

    let res = 0;
    const allTime = Math.round(time / (number / step));

    const interval = setInterval(() => {
      res += step;
      if (res >= number) {
        res = number;
        clearInterval(interval);
      }

      let displayValue = res;

      // Скорочення до k, якщо більше 999
      if (options.shortK && res >= 1000) {
        displayValue = Math.round(res / 1000) + "k";
      }

      // Додавання % при потребі
      if (options.percent) {
        displayValue = res + "%";
      }

      // Додавання плюса
      if (options.plus) {
        displayValue += "+";
      }

      counter.innerHTML = displayValue;
    }, allTime);
  }

  // Анімація при появі секції
  let triggered = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !triggered &&
        entry.target.classList.contains("section-3")
      ) {
        triggered = true;

        numCounter("#num-1", 150, 2000, 5, { plus: true }); // 150+
        numCounter("#num-2", 300, 2000, 5, { plus: true }); // 300+
        numCounter("#num-3", 100, 1500, 5, { percent: true }); // 100%
        numCounter("#num-4", 100000, 2000, 1000, { shortK: true }); // 100k
      }
    });
  });

  document.querySelectorAll(".section-3").forEach((section) => {
    observer.observe(section);
  });
});

const topButton = document.querySelector(".global-top");

// Показати/приховати кнопку при скролі
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const quarterPage = document.documentElement.scrollHeight / 4;

  if (scrollTop > quarterPage) {
    topButton.classList.add("visible");
  } else {
    topButton.classList.remove("visible");
  }
});

// Скрол до верху при кліку
topButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});



// Accordion 
function accordion() {
    const items = document.querySelectorAll('.accordion__item-trigger')
    items.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode
            if (parent.classList.contains('accordion__item-active')) {
                parent.classList.remove('accordion__item-active')
            } else {
                document
                    .querySelectorAll('.accordion__item')
                    .forEach(child => child.classList.remove('accordion__item-active'))   
                parent.classList.add('accordion__item-active')
            }
        })
    })
}
accordion() 



