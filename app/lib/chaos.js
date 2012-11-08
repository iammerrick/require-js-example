define(function() {
  var run = function(odds) {
    var rand = Math.random();
    
    if (rand > 1 - odds) {
      throw new Error('Chaos Monkey Strikes!');
    }
    
    console.log('Consider yourself lucky.');
  }
  
  return run;
});