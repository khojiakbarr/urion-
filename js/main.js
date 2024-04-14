const tabletka = document.getElementById("tabletka");
const vektor_two = document.getElementById("vektor_two");
const oval = document.getElementById("oval");
const vector_one = document.getElementById("vector_one");

tabletka.addEventListener("mouseover", (e) => {
  vektor_two.classList.toggle("animateVectorTwo");
  oval.classList.toggle("animateOval");
  vector_one.classList.toggle("animateVector");
});

tabletka.addEventListener("mouseout", (e) => {
  vektor_two.classList.toggle("animateVectorTwo");
  oval.classList.toggle("animateOval");
  vector_one.classList.toggle("animateVector");
});

//? swiper

var swiper = new Swiper(".mySwip__swiper", {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swip-next",
    prevEl: ".swip-prev",
  },
  breakpoints: {
    // when window width is <= 767px
    767: {
      slidesPerView: 2,
      spaceBetweenSlides: 40,
    },
    // when window width is <= 1300px
    1300: {
      slidesPerView: 2,
      spaceBetweenSlides: 40,
    },
  },
});

var swiper = new Swiper(".prostata_swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

//? swiper otvis

var swiper = new Swiper(".wiper_otvis", {
  slidesPerView: 2,
  spaceBetween: 30,
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.6,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

//? TELEGRAM BOT
const btnImage = document.querySelector("#btn-image");
const user = document.getElementById("name");
const number = document.getElementById("input");
    CHAT_ID = "-1002104534949";
    TOKEN = "6779609754:AAGGILcPKAb2oqP3X6ijwabMR5j4Ig1_xDo";
    URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    document.getElementById("form").addEventListener("submit", function (e) {
      e.preventDefault();

      let message = `<b>urion zakaz 50%</b>\n`;
      message += `<b>ism:</b>${user.value}\n`;
      message += `<b>nomer:</b>${number.value}`;

      axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      });
      user.value = "";
      number.value = "";
      btnImage.classList.toggle('succes')
      
    });

    number.addEventListener("focus", (event) => {
      number.value = "";
      number.value = "+998";
    });