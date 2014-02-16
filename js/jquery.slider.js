define(['jquery','jquery.easing'], function ($) {
    $.fn.slider = function (options) {
        var defaults = {
            orientation: 'horizontal',
            easing: 'easeInOutExpo',
            duration: 1000
        };

        return $(this).each(function (idx) {
            var $self = $(this);
            var settings = $.extend({}, defaults, options || {});

            for (var name in defaults) {
                settings[name] = $self.attr('data-option-' + name) || settings[name];
            }
            $self.find('> .content > section').each(function (idx) {
                var $section = $(this);

                var id = $section.attr('data-ui-id');
                $self.find('[data-ui-bind="' + id + '"]').on('click', function (e) {
                    e.preventDefault();
                    var bind = $(this).attr('data-ui-bind');
                    var $section = $self.find('[data-ui-id="' + bind + '"]');

                    var properties = {};
                    switch (settings.orientation) {
                        case 'vertical' :
                            properties = {
                                'margin-top': -($section.width() * idx)
                            }
                            break;
                        default:
                            properties = {
                                'margin-left': -($section.width() * idx)
                            }
                            break;
                    }

                    $section.parent().animate(properties, {queue: false, easing: settings.easing, duration: settings.duration});
                    $self.attr('data-ui-current', idx);
                });
            });
        });
    }
    return $;
});
