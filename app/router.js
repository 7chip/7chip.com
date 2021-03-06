import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home',{path:''})
  this.route('portfolio');
  this.route('contact');
    this.route('team');
    this.route('about');
    this.route('product');
    this.route('service');
});

export default Router;
