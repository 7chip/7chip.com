import Ember from 'ember';

export default Ember.Route.extend({
    activate: Ember.on('activate', function(){
        console.log('Home activated')
    }),
    deactivated: Ember.on('deactivate', function(){
        console.log("losted")
    }),
    model(){
        return {
            name: 'Sibin Xavier',
            position: 'Software Developer'
        }
    }
});
