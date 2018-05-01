$(function(){
  var list ;
  $('.dropdown').on('change', function(event) {
    event.preventDefault();
    var section = $(this).val();
    $('.dump').empty();
      list = '';
    $('.header').css("height", "auto");
    $('.nyt-logo').css("height","6rem");
   if(section!=="") {           
      $('.ajax-loader').css("display","block");
      $.ajax({
       method: 'GET',
       url: 'https://api.nytimes.com/svc/topstories/v2/' + section +'.json?api-key=8ac58e86a8aa4a118f15cdf99ab41333'
       })
      .done(function(data) {
         if(data.results.length !==0){
          $.each(data.results, function(key, value){

          if(value.multimedia.length > 0){
            var backgroundUrl = value.multimedia[4].url;
            } else {
            var backgroundUrl = 'https://www.fillmurray.com/200/300';
          }
           if(key < 12){
             list += '<li><a href="'+value.url+'" target="_blank"><div class="inner" style="background-image:url('+backgroundUrl+ ')">'+'<p class="abstract">' +value.abstract + '<p></div></a></li>';
            }
          });
          $('.dump').append(list);
        }
      })
   
      .fail(function() {
        $('.dump').append('Sorry there was an error.');
      })
      .always(function(){
        $('.ajax-loader').hide();
      });  
    };
  });
});


