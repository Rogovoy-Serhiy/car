const swiper = new Swiper(".mySwiper", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
  });