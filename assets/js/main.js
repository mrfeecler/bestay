$.fn.extend({
    toggleText: function(a, b){
        return this.text(this.text() == b ? a : b);
    }
});
var count = 0;
function transition() {
    if (count < $('.customer-say-gallery-images .customer-say-gallery-image').length) {
        $('.customer-say-main-image .cta-nav button.nav-next').click();    
    } else {
        var numbered = 0
        var html_content = $('.customer-say-gallery-images .customer-say-gallery-image').eq(0);
        $(".customer-say-main-image .cta-nav button.nav-prev").attr('prevsrc', parseInt(numbered) - 1);
        $(".customer-say-main-image .cta-nav button.nav-next").attr('nextsrc', parseInt(numbered) + 1);
        $('.customer-say-main-image .customer-say-gallery-image').html(html_content.prop('outerHTML'));
        count = 0;
    }
    count++;
}
setInterval(transition, 2000);
$(document)
    .ready(function() {
        $('.owl-carousel').owlCarousel({
            nav:false,
            loop: true,
            autoplay: false,
            autoplayTimeout: 1000,
            dots: true,
            items:1
        })
        $(window).scroll(function() {
            if ($('#header').offset().top > 0) {
                $('#header').addClass('active');
            } else {
                $('#header').removeClass('active');
            }
        });
        if ($( window ).width() < 992) {
            $('#main .intro-app .services').addClass('owl-carousel');
            $('#main .questions .container .others-place').addClass('owl-carousel');
            $('#main .questions .container .others-place').owlCarousel({
                loop: false,
                autoplay: true,
                autoplayTimeout: 2000,
                nav:false,
                dots: false,
                items:1
            });
            $('#main .intro-app .services').owlCarousel({
                loop: false,
                autoplay: true,
                autoplayTimeout: 2000,
                nav:false,
                dots: false,
                items:1
            })
        }
    })
    .on('click', '.special-rooms button', function() {
        $('.special-rooms .special-room:nth-child(n+9)').toggle(400);
        $(this).toggleText('xem thêm', 'thu gọn');
        $(this).toggleClass('opened');
    })
    .on('click', '.customer-say-gallery-images .customer-say-gallery-image', function() {
        var html_content = $(this).html();
        var index_image = $(this).index();
        $(".customer-say-main-image .cta-nav button.nav-prev").attr('prevsrc', index_image - 1);
        $(".customer-say-main-image .cta-nav button.nav-next").attr('nextsrc', index_image + 1);
        $('.customer-say-main-image .customer-say-gallery-image').html(html_content);
    })
    .on('click', '.customer-say-main-image .cta-nav button', function() {
        var prev_act = $(this).attr('prevsrc');
        var next_act = $(this).attr('nextsrc');
        var numbered = 0
        if (prev_act && prev_act >= 0) {
            var html_content = $('.customer-say-gallery-images .customer-say-gallery-image').eq(prev_act);
            numbered = prev_act;
        }
        if (next_act && next_act < $('.customer-say-gallery-images .customer-say-gallery-image').length) {
            var html_content = $('.customer-say-gallery-images .customer-say-gallery-image').eq(next_act);
            numbered = next_act;
        }

        if (html_content && html_content != '') {
            $(".customer-say-main-image .cta-nav button.nav-prev").attr('prevsrc', parseInt(numbered) - 1);
            $(".customer-say-main-image .cta-nav button.nav-next").attr('nextsrc', parseInt(numbered) + 1);
            $('.customer-say-main-image .customer-say-gallery-image').html(html_content.prop('outerHTML'));
        }
    })
    .on('click', '.menu-area .close-image', function() {
        $('#header .menu-area').removeClass('active');
    })
    .on('click', '#header .menu-header', function() {
        $('#header .menu-area').addClass('active');
    })
    .on('click', '#main .support li', function() {
        $(this).toggleClass('active');
    });
