$(document).ready(function () {

    // hamburger menu init
    $('#hamburger-menu').mmenu();

    // search-window
    $('#seasons-window').mmenu({
        extensions: ['border-none', 'shadow-page', 'theme-white', 'pagedim-black'],
        offCanvas: {
            zposition: 'front',
            position: 'bottom'
        },
        navbar: {
            title: "Seasons"
        },
        navbars: [{
            content: ["prev", "title", "close"],
        }],
        dividers: {
            add: false,
            fixed: true
        },
    }, {})
});

// horizontal scroll for main page
function initMovieListScroller() {
    new IScroll('.js-movie-list__horizontal-scroller', {
        eventPassthrough: true,
        scrollX: true,
        scrollY: false,
        preventDefault: false
    });
}

function initSeriesListScroller() {
    new IScroll('.js-series-list__horizontal-scroller', {
        eventPassthrough: true,
        scrollX: true,
        scrollY: false,
        preventDefault: false
    });
}

function initCartoonsListScroller() {
    new IScroll('.js-cartoons-list__horizontal-scroller', {
        eventPassthrough: true,
        scrollX: true,
        scrollY: false,
        preventDefault: false
    });
}

function initTedListScroller() {
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