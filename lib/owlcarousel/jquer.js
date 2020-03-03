$('.owl-carousel').owlCarousel({
    autoplay: 3000,
    loop:true,
    items:5,
    margin:10,
    nav:true,
    dots: true,
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
