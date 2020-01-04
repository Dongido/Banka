$(document).ready(function() {
    // Turn off Google Map zooming

    $('.maps').addClass('scrolloff'); // set the pointer events to none on doc ready
    $('#map').on('click', function () {
        $('.maps').removeClass('scrolloff'); // set the pointer events true on click
    });
    // you want to disable pointer events when the mouse leave the canvas area;
    $(".maps").mouseleave(function () {
        $('.maps').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
    });

    $(".map_selector").on("click",function(e){
        e.preventDefault();
        var selectedMap = $(this).data('map');
        $('.map').addClass('hide');
        $('.map_'+selectedMap).removeClass('hide');
    });



    // Owlcarosel
    $("#testimonial_slider").owlCarousel({

        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        loop:true,
        nav:true,
        dots: false,
        items: 1,
        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
     
          // navigation : true, // Show next and prev buttons
          // slideSpeed : 300,
          // paginationSpeed : 400,
          // // singleItem:true
     
          // // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
     
    });
});
$(document).on('click', '.panel-heading span.clickable', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
$(document).on('click', '.panel div.clickable', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});

$(document).ready(function () {
    $('.panel-heading span.clickable').click();
    $('.panel div.clickable').click();
});
$(".rotate").textrotator({
    animation: "flip", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 3000 // How many milliseconds until the next word show.
});


$('#post a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// after scrolling add class
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 150) {
        $(".navbar").addClass("thin");
    }
    else {
        $(".navbar").removeClass("thin");
    }
});

// Exapnd area
var z=999;
$(function() {
    $('.thumb').click(function(){
       var $more=$(this).find('.more')
       $more.css('z-index',z).show();
       z++;
       
       var h=$more.height();     
       $(this).height(h);
    })
    
    $('.more').click(function(event){
        event.stopPropagation();
        $(this).hide();        
        $('.thumb').height(100);        
    })
})

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);

            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});