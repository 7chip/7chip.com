import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Ember.Application.extend({
  ready: function(){
    $(document).ready(function(){
      $(this).find('body').addClass('loaded').removeClass('ember-body')
			$(this).foundation();
			

			/**
			 * HEADER SCROLL 
			 */
			const headerElement = $('#home-header');
			if(headerElement.length > 0){
				$(window).scroll(()=> {
					let windowsTop = $(window).scrollTop();
					if(windowsTop > headerElement.height()){
						headerElement.addClass('header-scrolled')
					}else{
						headerElement.removeClass('header-scrolled')
					}
				});
			}
    });
  },
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);



export default App;
