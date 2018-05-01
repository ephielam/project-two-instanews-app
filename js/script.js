// (function($) {
//   //declare variables
//   var nytData, 
//       endpoint,
//       $loader = $('.ajax-loader'),
//       $stories = $('.stories');

//   //upon selction of dropdown menu item
//   $('.dropdown').on('change',
//                     function () {
//     var section = $(this).val();
    
//     //empty the stories div first
//     endpoint = 'https://api.nytimes.com/svc/topstories/v2/' + section + '.json?api-key=8ac58e86a8aa4a118f15cdf99ab41333';
//     $stories.empty();
//     nytData = '';
//     nytItems = '';
    
    
//     //css changes here
//     $loader.css("display","block"),

//     $.ajax({
//       method: 'GET',
//       url: endpoint,
//       dataType: 'json',
//     })
//     .done(function(data) {
//       nytData = data.results;
//       var articleLink, articleTitle, articleImageUrl;
      
//       //if data is returned
//       if(nytData.length !==0){
//         //start unordered list
//         nytItems += '<ul'>,
//         //for each story
//         $.each(function(key, value) {
//           articleImageUrl = value.multimedia[4].url,
//           articleTitle = value.["abstract"],
//           articleLink = value.url,
//           nytItems += '<li class="article-item">',
//           nytItems += '<a href=" ' +articleLink +'" target="_blank">',
//           nytItems += '<div class="inner-item-wrapper">',
//           nytItems += '<div class="article" style="background-image:url('+ articleImageUrl + ')">',
//           nytItems += '<div class="story-meta">',
//           nytItems += '<p>' +
//             (articleTitle || "This story has no description.") + '</p>',
//           nytItems += '</div>',
//           nytItems += '</div>',
//           nytItems += '</div>',
//           nytItems += '</a>',
//           nytItems += '</li>',
//         }),
//           nytItems += '</ul>';
           
//       } else {
//        nytItems += '<p class="feedback">Sorry!</p>';
//        }
      
//         $stories.hide().fadeIn('fast').append(nytItems);
//       })
//     .fail(function(){
//       $stories.append('<p class="feedback">Sorry2!</p>');
//     })
//     .always(function() {
//       $loader.hide();
//     });
//   });
// })(jQuery);


$(function(){
  var list ;
  $('.dropdown').on('change', function(event) {
    event.preventDefault();
    var section = $(this).val();
    $('.dump').empty();
    list = '',
    $('.ajax-loader').css("display","block");
    $.ajax({
     method: 'GET',
     url: 'https://api.nytimes.com/svc/topstories/v2/' + section +'.json?api-key=8ac58e86a8aa4a118f15cdf99ab41333'
     })
    .done(function(data) {
       if(data.results.length !==0){
        $.each(data.results, function(key, value){
         if(key < 5){
           list += '<li><a href="'+value.url+'" target="_blank"><div class="inner" style="background-image:url('+value.multimedia[4].url+ ')">'+'<p>' +value.abstract + '<p></div></a></li>';
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
      $('li').slice(0,4);
    });  
  });
});

