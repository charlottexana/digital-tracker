/* eslint no-console:0 */
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
//= require rails-ujs
//= require turbolinks
//= require_tree

// require 'uri'
// require 'net/http'
// require 'openssl'

console.log('Hello World from Webpacker')

import 'bootstrap';

import { initUpdateNavbarOnScroll } from '../components/navbar';

document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  initUpdateNavbarOnScroll();
});

import '../components/desktopresults';
import '../components/mobileresults';

import { getSerpResult } from '../components/serps';
