$(".banner-carousel").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    dots: true,
    autoplayTimeout: 3000,
    smartSpeed: 750,
    autoplayHoverPause: true,
});
$(".lab-test").owlCarousel({
    items: 7,
    loop: true,
    autoplay: false,
    dots: true,
    autoplayTimeout: 3000,
    smartSpeed: 750,
    autoplayHoverPause: true,
});
$(".categories").owlCarousel({
    items: 7,
    loop: true,
    autoplay: false,
    dots: true,
    autoplayTimeout: 3000,
    smartSpeed: 750,
    autoplayHoverPause: true,
});
$(".brands").owlCarousel({
    items: 6,
    loop: true,
    autoplay: false,
    dots: true,
    autoplayTimeout: 3000,
    smartSpeed: 750,
    autoplayHoverPause: true,
});
$(".brands-offers").owlCarousel({
    items: 4,
    loop: true,
    autoplay: false,
    dots: true,
    autoplayTimeout: 3000,
    smartSpeed: 750,
    autoplayHoverPause: true,
});

// Banner Btns
var slider = $(".banner-carousel");

$(".banner-prev").click(function() {
    slider.trigger("prev.owl.carousel")
});

$(".banner-next").click(function() {
    slider.trigger("next.owl.carousel")
});
// Lab
var slider = $(".lab-test");

$(".lab-prev").click(function() {
    slider.trigger("prev.owl.carousel")
});

$(".lab-next").click(function() {
    slider.trigger("next.owl.carousel")
});
// categories
var slider = $(".categories");

$(".categories-prev").click(function() {
    slider.trigger("prev.owl.carousel")
});

$(".categories-next").click(function() {
    slider.trigger("next.owl.carousel")
});
// brands
var slider = $(".brands");

$(".brands-prev").click(function() {
    slider.trigger("prev.owl.carousel")
});

$(".brands-next").click(function() {
    slider.trigger("next.owl.carousel")
});
// brands-offers
var slider = $(".brands-offers");

$(".brands-offers-prev").click(function() {
    slider.trigger("prev.owl.carousel")
});

$(".brands-offers-next").click(function() {
    slider.trigger("next.owl.carousel")
});
