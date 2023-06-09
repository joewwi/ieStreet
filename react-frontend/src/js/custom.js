import $ from 'jquery';
import './setupJquery'

// navigation menu js
function openNav() {
    $('#myNav').toggleClass('menu_width');
    $('.custom_menu-btn').toggleClass('menu_btn-style');
}

// display current year on footer
function getCurrentYear() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    $('#displayYear').text(currentYear);
}

getCurrentYear();

// carousel indicator style
const liOne = $('.slider_section .carousel-indicators li.li_one');
const litwo = $('.slider_section .carousel-indicators li.li_two');
const ulAfter = $('.slider_section .carousel-indicators .ol_design');

$('#carouselExampleIndicators').on('slid.bs.carousel', function (event) {
    if (liOne.hasClass('active')) {
        ulAfter.css('left', `calc(0% + ${35}px)`);
    } else if (litwo.hasClass('active')) {
        ulAfter.css('left', `calc(100% - ${45}px)`);
    }
});
