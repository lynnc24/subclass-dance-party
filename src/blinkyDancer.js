var makeRedBlinkyDancer = function(top, left, timeBetweenSteps) {

  MakeDancer.call(this, top, left, timeBetweenSteps);
  $('span.dancer').addClass('redCircle');
  $('span.dancer').removeClass('dancer');

};

makeRedBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

makeRedBlinkyDancer.prototype.constructor = makeRedBlinkyDancer;

makeRedBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // var oldStep = this.step;
  // 
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node = $('<span class="redCircle"></span>');
  this.$node.toggle();
};
