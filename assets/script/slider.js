import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const homeBannerSwiper = new Swiper("#homeBanner", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: "#homeBanner .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#homeBanner .swiper-button-next",
      prevEl: "#homeBanner .swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
    },
}); 

const timeLineSwiper = new Swiper("#timeLine", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".timeLine__slider .swiper-button-next",
    prevEl: ".timeLine__slider .swiper-button-prev",
  },
  autoplay: {
      // delay: 3000,
  },
}); 


const otherProducts = new Swiper(".other > .swiper", {
  slidesPerView: 'auto',
  spaceBetween: 25,
  loop: false,
  // navigation: {
  //   nextEl: ".timeLine__slider .swiper-button-next",
  //   prevEl: ".timeLine__slider .swiper-button-prev",
  // },
  // autoplay: {
  //     delay: 3000,
  // },
}); 