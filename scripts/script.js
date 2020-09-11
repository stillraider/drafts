let show = $(".show-form");
let scrollNo = $("body");
let formShadow = $(".show-form__shadow");
let thematicBtn = $(".thematic__btn");
let formCross = $(".show-form__cross");

function formHide () {
    show.toggleClass("form");
    scrollNo.css("overflow","initial");
}

formCross.on("click", function () {
    formHide ();
})
formShadow.on("click", function () {
    formHide ();
})
thematicBtn.on("click", function () {
    show.toggleClass("form");
    scrollNo.css("overflow","hidden");
})

$(document).ready(function () {
    $(".slider-wrap").slick({
        slidesToShow: 3,
        speed: 600,
        variableWidth: true,
    });
});







function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
    else{
        document.querySelector('body').classList.add('no-webp');
    }
});