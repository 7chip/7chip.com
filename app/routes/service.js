import Ember from 'ember';
import {ServiceItemList} from '../content/service-items';
export default Ember.Route.extend({
	init(){
		console.log(ServiceItemList)
	},
	model(){
		return {
			serviceList:ServiceItemList,
			title: 'Service Page'
		}
	}
});
