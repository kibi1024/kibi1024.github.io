'use strict';

require.config({
  baseUrl: 'js',
  paths: {
    // plugins
    async: 'libs/require/plugins/async',
    depend: 'libs/require/plugins/depend',
    font: 'libs/require/plugins/font',
    goog: 'libs/require/plugins/goog',
    image: 'libs/require/plugins/image',
    json: 'libs/require/plugins/json',
    noext: 'libs/require/plugins/noext',
    mdown: 'libs/require/plugins/mdown',
    propertyParser: 'libs/require/plugins/propertyParser',
    text: 'libs/require/plugins/text',
    order: 'libs/require/plugins/order',
    i18n: 'libs/require/plugins/i18n',

    // libs
    jquery: 'libs/jquery/2.1.0/jquery.min',
    'waypoints': 'libs/jquery.waypoints/2.0.4/jquery.waypoints.min',
    'jquery.stellar': 'libs/jquery.stellar/0.6.2/jquery.stellar.min',
    'jquery.easing': 'libs/jquery.easing/1.3.0/jquery.easing',
    underscore: 'libs/underscore/1.5.2/underscore.min',
    swiper: 'libs/swiper/2.4.3/idangerous.swiper.min'
  },
  shim: {
    jquery: {
      exports: 'jQuery'
    },
    'waypoints': {
      deps: ['jquery'],
      exports: 'jQuery'
    },
    'jquery.stellar': {
      deps: ['jquery'],
      exports: 'jQuery'
    },
    'jquery.easing': {
      deps: ['jquery'],
      exports: 'jQuery'
    },
    underscore: {
      exports: '_'
    },
    swiper: {
      exports: 'Swiper'
    }
  },
  priority: [
    'jquery', 'underscore'
  ],
  urlArgs: 't=' + (new Date()).getTime(),
  waitSeconds: 60
});

require(['./apps/app']);