import Ember from 'ember';

export default Ember.Controller.extend({
  homeHeader: Ember.computed('currentRouteName', function(){
    return (this.get('currentRouteName') === 'home')
  })
});
