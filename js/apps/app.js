require(['jquery', 'swiper'], function ($, swiper) {
  var onResize = function () {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    (function () {
      var $slider = $('#services > .swiper-container');
      var $content = $slider.find('> .swiper-wrapper');
      var $section = $content.find('> .swiper-slide');
      $content.width(windowWidth * $section.length).height(windowHeight);
      $section.width(windowWidth);
    })();

    (function () {
      var $slider = $('#portfolio .swiper-container');
      var $content = $slider.find('> .swiper-wrapper');
      var $section = $content.find('> .swiper-slide');
      var $item = $section.find('.item');
      var width = $slider.innerWidth();
      $content.width(width * $section.length).height($item.height() * 2 + 10);
      $section.width(width);
    })();

    (function () {
      $('#content > section').css('min-height', windowHeight);
    })();

  };
  $(window).on('resize', function () {
    onResize();
  });
  onResize();

  var serviceSwiper = new Swiper('#services .swiper-container', {
    pagination: '.pagination',
    paginationClickable: true
  });


  var category = $('#portfolio .category');
  var portfolioSwiper = new Swiper('#portfolio .swiper-container', {
    onSlideChangeStart: function(){
      category.find('.active').removeClass('active')
      category.find('a').eq(portfolioSwiper.activeIndex).addClass('active')
    }
  });
  category.find('a').eq(0).addClass('active');

  category.find('a').on('click touchstart mousedown',function(e){
    e.preventDefault();

    var $this = $(this);
    category.find('.active').removeClass('active');
    $this.addClass('active');
    portfolioSwiper.swipeTo( category.find($this.parent()).index() )
  })

});

require(['jquery', 'async!http://maps.google.com/maps/api/js?v=3&sensor=false&region=ko'], function ($) {
  $(function () {
    var center = new google.maps.LatLng(37.01261672, 127.260162);
    var latlan = new google.maps.LatLng(37.01261672, 127.260162);

    var options = {
      zoom: 16,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.RIGHT_CENTER
      },
      mapTypeControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.RIGHT_BOTTOM
      },
      streetViewControl: false,
      center: center,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false

    };
    var map = new google.maps.Map($('#contact .map').get(0), options);

    var marker = new google.maps.Marker({
      position: latlan,
      title: '산학협력관 306호 KIBI',
      icon: {
        url: './img/marker-icon.png'
      }
    });

    marker.setMap(map);
  });
});

define(['jquery.easing', 'waypoints', 'jquery.stellar'], function ($) {
  $(window).stellar();

  var links = $('#gnb').find('li');
  var slide = $('section[data-slide]');
  var mywindow = $(window);
  var htmlbody = $('html, body');

  //Setup waypoints plugin
  slide.waypoint(function (event, direction) {
    //cache the variable of the data-slide attribute associated with each slide
    var dataslide = $(this).attr('data-slide');

    var select = $('#gnb li[data-slide="' + dataslide + '"]');
    select.siblings().removeClass('selected');
    select.addClass('selected');
  });

  //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class
  //from navigation link slide 2 and adds it to navigation link slide 1.
  mywindow.scroll(function () {
    if (mywindow.scrollTop() == 0) {
      $('#gnb li:nth-child(1)').siblings().removeClass('selected');
      $('#gnb li:nth-child(1)').addClass('selected');
    }
  });

  //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
  //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
  function goToByScroll(dataslide) {
    htmlbody.stop();
    htmlbody.animate({
      scrollTop: $('section[data-slide="' + dataslide + '"]').offset().top,
    }, 2000, 'easeInOutQuint', function () {
      $.waypoints('enable');
    });
  }


  //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
  links.click(function (e) {
    e.preventDefault();
    dataslide = $(this).attr('data-slide');
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
    $.waypoints('disable');
    goToByScroll(dataslide);
  });
});