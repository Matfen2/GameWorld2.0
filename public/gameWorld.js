var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".swiper-slide").each((index, slide) => {
  $(slide)
    .find(".card")
    .each((index, card) => {
      $(card)
        .find(".btnPlus")
        .each((index, btnPlus) => {
          $(btnPlus).click(() => {
            $(card).find(".btnPlus").css("display", "none");
            $(card).find(".btnMinus").css("display", "block");
            $(card).find(".card-body").toggle();
          });
        });
    });
});

$(".swiper-slide").each((index, slide) => {
  $(slide)
    .find(".card")
    .each((index, card) => {
      $(card)
        .find(".btnMinus")
        .each((index, btnMinus) => {
          $(btnMinus).click(() => {
            $(card).find(".btnPlus").css("display", "block");
            $(card).find(".btnMinus").css("display", "none");
            $(card).find(".card-body").toggle();
          });
        });
    });
});
