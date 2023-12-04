// var name = "Alex";

// let number = 7;
// const pi = 3.14;

// number = 4;

// let LeftBorderWidth;

// numer
// string - "" , '' , ``
// true/false
//null
//undefined
// let obj = {
//     name : 'apple';
//     color: 'green';
//     weight: 200
// }
// Symbol
// alert(1234)

// console.log(number);
// let answer = prompt("вам есть 18?", "");
// console.log(answer);

// console.log(4 + "ffgg");

// let isCheaked = true,
//     isClose = true;

// console.log(isCheaked && isClose)
// console.log(isCheaked || isCLose)

// if (2*6 == 8+1) {
//     console.log("верно")
// } else {
//     console.log("неверно")
// }

// let answer = confirm("вам есть 18?");
// if (answer) {
//     console.log("проходите")
// } else {
//     console.log("вход запрощен")
// }

// const num = 50;

// if (num < 49) {
//     console.log("неправильно")
// } else if (num > 100) {
//     console.log("много")
// } else {
//     console.log("верно")
// }

// for (let i = 1; i < 8; i ++) {
//     console.log(i)
// }

// function logging(a, b) {
//     console.log(a + b)
// }

// logging(3, 5)

            // speed: 1200,
            // adaptiveHeight: true,
            // arrows: true.
            // prevArrow: "<button type="button" class="slick-prev"><img src="../icons/chevron-left-solid.png"></button>",

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        // arrows: true,
        prevArrow: "<button type='button' class='slick-prev'><img src='icons/chevron-left-solid.png'></button>",
        nextArrow: "<button type='button' class='slick-next'><img src='icons/chevron-right-solid.png'></button>",
        responsive: [
            {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // dots: true,
                arrows: false,
                }
            },
        ]
    });
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    // $('.catalog-item__link').each(function(i) {
    //     $(this).on('click', function(e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })
    function tooggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    }

    tooggleSlide('.catalog-item__link');
    tooggleSlide('.catalog-item__back');
        // responsive: [
        //     {
        //     breakpoint: 1024,
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3,
        //         infinite: true,
        //         dots: true
        //         }
        //     },
        //     {
        //     breakpoint: 600,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2
        //         }
        //     },
        //     {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //         }
        //     }
        //     // You can unslick at a given breakpoint now by adding:
        //     // settings: "unslick"
        //     // instead of a settings object
        // ]
    

        // Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    // $('.button_mini').on('click', function () {
    //     $('.overlay, #order').fadeIn('slow');
    // });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $("#order .modal__descr").text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    $('form').submit (function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks ').fadeIn("slow");
            $("form").trigger('reset');
        })
        return false;
    })
    // smoorh scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    })

    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
            event.preventDefault();
    
          // Store hash
            var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        } // End if
        });
});



