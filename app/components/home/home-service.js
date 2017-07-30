import Ember from 'ember';

import  ServiceItems from '../../content/service-items';

export default Ember.Component.extend({
  init(){
    this._super(...arguments);
    this.serviceItems = ServiceItems;
  }



});
