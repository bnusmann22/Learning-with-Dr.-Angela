$('button').click(function () {
  $('h1').css('color', 'blue');
});

$("#text").keypress(function(event){
    $('h1').text(event.key)
})