function scrollFor(selector){
$(selector).on('click',function () {
    var $anchor = $(this);
    $('html, body').animate({
        scrollTop: $($anchor.attr('href')).position().top
    }, 1000);
});
}

scrollFor('a[href*=about-anchor]');
scrollFor('a[href*=speakers-anchor]');
scrollFor('a[href*=sign-up-anchor]');