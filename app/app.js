import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Ember.Application.extend({
  ready: function(){
    $(document).ready(function(){
    
      $(this).find('body').addClass('loaded').removeClass('ember-body')
      $(this).foundation()
    });
  },
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);



export default App;
