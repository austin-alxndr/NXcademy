// Filter JS

$(document).ready(function(){
    
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse')

    /** Click event on toggle menu **/
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')] 
    });

    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter');
        if(value == 'all') {
            $('.post-box').show('1000');
        }
        else {
            $('.post-box').not('.' + value).hide('1000');
            $('.post-box').filter('.' + value).show('1000');
        }
    });

    //Add active to btn
    $('.filter-item').click(function(){
        $(this).addClass('active-filter').siblings().removeClass('active-filter');
    });

    //Make box clickable
    $('.post-box').click(function(){
        window.location = $(this).find("a").attr("href");
        return false;
    });
});