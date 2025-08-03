// animation

document.addEventListener("DOMContentLoaded", function () {
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  function animateHomePage() {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.from(".hero__head img", {
      y: 30,
      scale: 1.05,
      filter: "blur(10px)",
      duration: 1.2,
      clearProps: "all",
    })
      .from(
        ".header",
        {
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .from(
        ".hero__title",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.6"
      )
      .from(
        ".hero__undertitle",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      );

    gsap.fromTo(
      ".logos__item",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".logos",
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.fromTo(
      ".services__column",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services",
          start: "top 60%",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    gsap.from(".global-line__head", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".work",
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".work__column:nth-child(-n+2)", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".work__body",
        start: "top 75%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".work__column:nth-child(n+3)", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".work__column:nth-child(n+3)",
        start: "top 95%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".process__abovetitle", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".process",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".process__title", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".process__abovetitle",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".process__undertitle", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".process__title",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    document.querySelectorAll(".column-process").forEach((column) => {
      gsap.fromTo(
        column,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: column,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    gsap.from(".testimonials__title", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".testimonials",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".testimonials__undertitle", {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".testimonials__title",
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });

    const boxes = document.querySelectorAll(".testimonials__box");

    boxes.forEach((box, boxIndex) => {
      const cards = box.querySelectorAll(".testimonials__card");

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.2 + boxIndex * 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    });

    gsap.from(".about__head img", {
      y: 30,
      scale: 1.05,
      filter: "blur(10px)",
      duration: 1.2,
      clearProps: "all",
      scrollTrigger: {
        trigger: ".about",
        start: "top 40%",
        toggleActions: "play reverse play reverse",
      },
    });

    gsap.from(".about__item:first-child", {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about__body",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
      clearProps: "all",
    });

    gsap.from(".about__item:last-child", {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about__body",
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
      clearProps: "all",
    });
  }

  function animateServicesPage() {
    const tl = gsap.timeline();

    tl.from(".hero-services__title", {
      y: 50,
      opacity: 0,
      duration: 1,
    })
      .from(
        ".hero-services__undertitle",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      )
      .from(
        ".hero-services__actions",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.8"
      );
  }

  function animateWorkPage() {
    const tl = gsap.timeline();

    tl.from(".latest-work__title", {
      y: 50,
      opacity: 0,
      duration: 1,
    })
      .from(
        ".latest-work__undertitle",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      )
      .from(
        ".work__body",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.4"
      );
  }

  function animateAboutPage() {
    const tl = gsap.timeline();
    tl.from(".section-about__picture img", {
      y: 30,
      scale: 1.05,
      filter: "blur(10px)",
      duration: 1.2,
      clearProps: "all",
    })
      .from(
        ".section-about__title",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.6"
      )
      .from(
        ".section-about__undertitle",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      )
      .from(
        ".section-about__actions",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.8"
      );
    gsap.fromTo(
      ".section-about__card",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section-about__card",
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none",
        },
      }
    );
  }

  function animateBlogPage() {
    const tl = gsap.timeline();
    tl.from(".blog-hero__title", {
      y: 50,
      opacity: 0,
      duration: 1,
    })
      .from(
        ".blog-hero__undertitle",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      )
      .from(
        ".blog-hero__row",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.4"
      );
  }

  if (window.location.pathname.includes("/index") && mediaQuery.matches) {
    animateHomePage();
  }
  if (window.location.pathname.includes("/services") && mediaQuery.matches) {
    animateServicesPage();
  }
  if (window.location.pathname.includes("/work-page") && mediaQuery.matches) {
    animateWorkPage();
  }
  if (window.location.pathname.includes("/about") && mediaQuery.matches) {
    animateAboutPage();
  }
  if (window.location.pathname.includes("blog") && mediaQuery.matches) {
    animateBlogPage();
  }
});
