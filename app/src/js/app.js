$(document).ready(function () {

    // hamburger menu init
    $('nav#hamburger-menu').mmenu();
});

// horizontal scroll
function initScrollers() {
    new IScroll('.js-movie-list__horizontal-scroller', {
        eventPassthrough: true,
        scrollX: true,
        scrollY: false,
        preventDefault: false
    });

    new IScroll('.js-series-list__horizontal-scroller', {
        eventPassthrough: true,
        scrollX: true,
        scrollY: false,
        preventDefault: false
    });

    new IScroll('.js-cartoons-list__horizontal-scroller', {
        eventPassthrough: true,
        scrollX: true,
        scrollY: false,
        preventDefault: false
    });

    new IScroll('.js-ted-list__horizontal-scroller', {
        eventPassthrough: true,
        scrollX: true,
        scrollY: false,
        preventDefault: false
    });
}