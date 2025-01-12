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

    if($('div').hasClass('webmaster__content')){

        observer.observe(document.querySelector('.webmaster__content'));
    }

    let currentZoom = 0;
    let currentOpacity = 0;
    let minZoom = 0;
    let maxZoom = 1;
    let stepSize = 0.1;

    $(window).scroll(function (){
        let direction = 1;
        console.log($(this).scrollTop());
        if( $(this).scrollTop() > 1400 ){
            direction = 1;
            zoomImage(direction);
            if($(this).scrollTop() > 1800 &&  $(this).scrollTop() < 2299){
                $("#clients .clients__right img").css({
                    'transform':'none',
                    'position': 'fixed',
                    'top': '220px'
                });

            }

            if($(this).scrollTop() >= 2300 ){
                $("#clients .clients__right img").css({
                   'transform': 'translateY(880px)',
                    'position': 'absolute',
                    'top':'auto'
                });

            }
        } else if($(this).scrollTop() < 1399) {
            $("#clients .clients__right img").css({
                'transform': 'none',
            });
            direction = -1;
            zoomImage(direction);
        }
    })
    function zoomImage(direction)
    {
        let newZoom = currentZoom + direction * stepSize;
        let newOpacity =  currentOpacity + direction * stepSize;

        if (newZoom < minZoom || newZoom > maxZoom) {
            return;
        }

        currentZoom = newZoom;
        currentOpacity = newOpacity;

        if(direction ===  1){
            $("#clients .clients__right img").css({
                'transform': 'scale('+ currentZoom +')',
                'opacity': currentOpacity,
                'position': 'fixed',
                'top': '220px'
            });
        } else {
            $("#clients .clients__right img").css({
                'transform': 'scale('+ currentZoom +')',
                'opacity': currentOpacity,
                'position': 'absolute',
                'top': 'unset'
            });
        }

    }
})