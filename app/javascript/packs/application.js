/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
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

// desktop

document.addEventListener('DOMContentLoaded', function(){

const myKeyword = document.querySelector('#keywords');
// debugger

fetch('https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=landlord%20lifeguard&device=desktop&gl=GB&hl=en&location=United%20Kingdom')
  .then(response => response.json())
  .then((data) => {
    const newRanking = (data.organic.map(position => {
      return position.url
    }));

  for (var i = 0; i < newRanking.length; i++) {
      const title = newRanking[i];
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(title ));
      myKeyword.appendChild(li);
  }}
  );
});

// mobile

document.addEventListener('DOMContentLoaded', function(){

const myKeyword = document.querySelector('#mobile');
// debugger

fetch('https://app.zenserp.com/api/v2/search?apikey=700c9fe0-74fd-11ea-826c-03f7ed395182&q=landlord%20lifeguard&device=mobile&gl=GB&hl=en&location=United%20Kingdom')
  .then(response => response.json())
  .then((data) => {
    const newRanking = (data.organic.map(position => {
      return position.url
    }));

  for (var i = 0; i < newRanking.length; i++) {
      const title = newRanking[i];
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(title ));
      myKeyword.appendChild(li);
  }}
  );
});
