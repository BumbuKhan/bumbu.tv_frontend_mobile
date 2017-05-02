$(document).ready(function () {

    // hamburger menu init
    $('#hamburger-menu').mmenu();

    // search-window
    $('#search-window').mmenu({
        extensions: ['border-none', 'shadow-page', 'theme-white', 'pagedim-black'],
        offCanvas: {
            zposition: 'front',
            position: 'top'
        },
        navbar: false,
        navbars: {
            content: ['searchfield', 'close']
        }
    }, {})
        .on('click', 'a[href^="#/"]', function () {
                alert('Thank you for clicking, but that\'s a demo link.');
                return false;
            }
        );
});

// horizontal scroll for main page
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

function initSeasonsScrollers() {
    new IScroll('.js-seasons__horizontal-scroller', {
        eventPassthrough: true,
        scrollX: true,
        scrollY: false,
        preventDefault: false
    });
}