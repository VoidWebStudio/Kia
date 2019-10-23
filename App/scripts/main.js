function myFunction(x) {
    x.classList.toggle("change");
    let menu = document.querySelector("#nav-menu");
    menu.classList.toggle("menu-on");
}
// открыть по кнопке
$('.btn-popup').click(function() {
    $('.js-overlay-campaign').fadeIn();
    $('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.close-popup').click(function() {
    $('.js-overlay-campaign').fadeOut();

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
        $('.js-overlay-campaign').fadeOut();

    }
});
if($(window).width() < 1920){
    $('.credit-image img').right -='1%';
}