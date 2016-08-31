$.getJSON( "https://api.twitch.tv/kraken/streams/2beFlo?callback=?", function(response) {
  if (response.stream){
    $('.viewers span').text(response.stream.viewers);
    $('.intro iframe').removeClass("hidden");
    $('.intro-text').addClass('hidden');
  }else{
    $('.viewers span').text("0");
  }
});

$.getJSON( "https://api.twitch.tv/kraken/channels/2beFlo/follows?callback=?", function(response) {
  $('.followers span').text(response["_total"]);
});
