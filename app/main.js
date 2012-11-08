define([
  'handlebars',
  'app/lib/chaos',
  'text!./templates/app.handlebars'
], function(Handlebars, chaos, text) {
  var template = Handlebars.compile(text);
  return {
    start: function() {
      chaos(0.2);
      document.body.innerHTML = template({ name: 'CascadiaJS' });
    }
  }
});