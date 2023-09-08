new Swiper('.image-slider', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    simulateTouch: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    slidesPerGroup: 1,
    speed:1500,
    

    // breakpoints: {
    //     760: {
    //         slidesPerView: 3,
    //         slidesPerGroup: 3
    //     },
    //     660: {
    //         slidesPerView: 2,
    //         slidesPerGroup: 2
    //     },
    //     560: {
    //         slidesPerView: 2,
    //         slidesPerGroup: 2
    //     },
    //     100: {
    //         slidesPerView: 1,
    //         slidesPerGroup: 1
    //     }

    //   },

    spaceBetween: 03,
});


new Swiper('.image-slider2', {
    slidesPerView: 4,
    simulateTouch: true,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    // },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    slidesPerGroup: 4,
    speed: 1500,
    

    // breakpoints: {
    //     760: {
    //         slidesPerView: 3,
    //         slidesPerGroup: 3
    //     },
    //     660: {
    //         slidesPerView: 2,
    //         slidesPerGroup: 2
    //     },
    //     560: {
    //         slidesPerView: 2,
    //         slidesPerGroup: 2
    //     },
    //     100: {
    //         slidesPerView: 1,
    //         slidesPerGroup: 1
    //     }

    //   },

    spaceBetween: 03,
});

