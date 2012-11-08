define(['handlebars', 'app/lib/chaos'], function(Handlebars, chaos) {
  var template = Handlebars.compile('<h1>Hello {{name}}!</h1>');
  return {
    start: function() {
      chaos(0.2);
      document.body.innerHTML = template({ name: 'CascadiaJS' });
    }
  }
});