import Ember from 'ember';

export default Ember.Component.extend({
  init(){
    this._super(...arguments)
    if(typeof particlesJS !="undefined"){
      particlesJS.load('particles-js', 'other/particles.json', function() {
        
      });
    }
  }
});
