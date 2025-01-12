$(function (){
    $( ".banner__link:first-child" )
        .on( "mouseover", function() {
            $('.banner__img--blik-left-hover').css('opacity','1');
        } )
        .on( "mouseout", function() {
            $('.banner__img--blik-left-hover').css('opacity','0');
        } );
    $( ".banner__link:last-child" )
        .on( "mouseover", function() {
            $('.banner__img--blik-right-hover').css('opacity','1');
        } )
        .on( "mouseout", function() {
            $('.banner__img--blik-right-hover').css('opacity','0');
        } );


    $('.menu__link').click(function(){
        var $href = $(this).attr('href');
        var $anchor = $($href).offset();
        console.log($($href).offset())
        $("html, body").animate({ scrollTop: $anchor.top }, 1000);

        return false;
    });

    AOS.init();

    const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.add('start-animation');
            }
        });
    });

    observer.observe(document.querySelector('.webmaster__content'));
})