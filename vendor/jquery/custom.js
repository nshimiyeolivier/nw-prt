$(document).ready(function(){
  $('.voirplus').on('click', function(){
  $('#plusdeprojets').slideDown(2000);
  $(this).hide();
  $('.voirmoins').show();
  });

  $('.voirmoins').on('click', function(){
  $('#plusdeprojets').slideUp(2000);
  $(this).hide();
  $('.voirplus').show();
  });

  $('.voirplusdebadges').on('click', function(){
  $('#plusdebadadges').slideDown(2000);
  $(this).hide();
  $('.voirmoinsdebadges').show();
  });

  $('.voirmoinsdebadges').on('click', function(){
  $('#plusdebadadges').slideUp(2000);
  $(this).hide();
  $('.voirplusdebadges').show();
  });
});
