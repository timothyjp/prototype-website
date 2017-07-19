/* global $ */

$(document).ready(function(){

  $('#prototype').click(function(event){
    event.preventDefault();
    $('#prototype').addClass('active');
    $('.prototype').removeClass('hidden');
    $('#about').removeClass('active');
    $('.about').addClass('hidden');
  });
  
  $('#about').click(function(event){
  event.preventDefault();
  $('#about').addClass('active');
  $('.about').removeClass('hidden');
  $('#prototype').removeClass('active');
  $('.prototype').addClass('hidden');
});

});