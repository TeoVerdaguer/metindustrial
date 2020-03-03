$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 2000,
    smartSpeed: 500,
    loop:true,
    items:5,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
