(function (global) {
  var require = global.require || undefined;
  if (require === undefined) return;

  require.config({
    baseUrl: 'js',
    paths: {
      async: 'vendor/requirejs-plugins/async',
      depend: 'vendor/requirejs-plugins/depend',
      font: 'vendor/requirejs-plugins/font',
      goog: 'vendor/requirejs-plugins/goog',
      image: 'vendor/requirejs-plugins/image',
      json: 'vendor/requirejs-plugins/json',
      noext: 'vendor/requirejs-plugins/noext',
      mdown: 'vendor/requirejs-plugins/mdown',
      propertyParser: 'vendor/requirejs-plugins/propertyParser',

      'swiper': 'vendor/idangerous.swiper.min',
      jquery: 'vendor/jquery-1.8.3.min',
      'jquery.easing': 'vendor/jquery.easing-1.3',
      'jquery.stellar': ['vendor/jquery.stellar'],
      'jquery.waypoints': 'vendor/jquery.waypoints.min',
      underscore: 'vendor/underscore-1.4.3.min',
      ie9: ['//ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9', 'vendor/IE9-2.1.4.min'],
      pie: 'vendor/PIE-1.0.0.min'
    },
    shim: {
      'swiper': {
        exports: 'Swiper'
      },
      'jquery': {
        exports: 'jQuery'
      },
      'jquery.easing': {
        deps: ['jquery'],
        exports: 'jQuery'
      },
      'jquery.stellar': {
        deps: ['jquery.waypoints'],
        exports: 'jQuery'
      },
      ie9: {
        exports: 'IE7'
      }
    },
    urlArgs: "t=" + (new Date()).getTime()
//    waitSeconds: 15
  });
})(this);


//cdn:'http://underscorejs.org/underscore-min.js',
//cdn:'http://backbonejs.org/backbone.js',
//cdn: '//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js',
//cdn: '//requirejs.org/docs/release/2.1.2/minified/require.js',
//cdn: '//ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js',