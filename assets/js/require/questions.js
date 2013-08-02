// Generated by CoffeeScript 1.5.0
(function() {

  requirejs.config({
    baseUrl: cliqr.config.ASSETS + 'js/',
    paths: {
      'jquery.elastic': 'vendor/jquery.elastic',
      'jquery.bigtext': 'vendor/bigtext',
      underscore: 'vendor/underscore-1.4.4',
      backbone: 'vendor/backbone-1.0.0',
      handlebars: 'vendor/handlebars-1.0.rc.2'
    },
    shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['underscore'],
        exports: 'Backbone'
      },
      handlebars: {
        exports: 'Handlebars'
      }
    },
    urlArgs: 'bust=' + (new Date()).getTime()
  });

  require(['questions_app'], function(QuestionsApp) {
    var app;
    app = new QuestionsApp();
    return app.initialize();
  });

}).call(this);
