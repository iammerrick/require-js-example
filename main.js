requirejs.config({
  paths: {
    'handlebars' : 'vendor/handlebars-1.0.rc.1'
  },
  
  shim: {
    'handlebars' : {
      exports: 'Handlebars'
    }
  }
});

require(['app/main'], function(app) {
  app.start();
}, function(err) {
    console.log('Hey guys, we suck... :-( Time to restart!', err);
    
    // Restart
    require(['app/main'], function(app){
      app.start();
    });
});