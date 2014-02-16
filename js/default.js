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
      console.log($item.height());
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
      console.log(category.find('a').eq(portfolioSwiper.activeIndex));
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
require(['stellar']);

/*
 require(['jquery'], function($){
 var windowWidth = $(window).width();
 var windowHeight = $(window).height();
 $(function(){
 $('section[id]').each(function(){
 var $self = $(this);
 if(/url\(([^)]+)\)/i.test($self.css('background-image').toString())){
 $self.append($('<img class="background" src="' + RegExp.$1 + '" />'));
 $self.css('background', 'none');
 }
 });
 $('.background').css({'width': windowWidth, 'height': 950});
 });
 });
 */