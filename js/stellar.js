define(['jquery.easing', 'jquery.stellar'], function ($) {
    $(function () {
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
            }, 2000, 'easeInOutQuint', function(){
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
    })
});