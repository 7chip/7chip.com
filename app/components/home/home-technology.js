import Ember from 'ember';
import TechnologyItems  from "../../content/technology-items";

export default Ember.Component.extend({
  init(){
    this._super(...arguments)
    this.technologies = TechnologyItems
  }
});
