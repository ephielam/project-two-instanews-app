(function($) {
  var nytData, 
      endpoint,
      $loader = $('.ajax-loader'),
      $stories = $('.stories');
  
  $('.dropdown').on('change',
                    function () {
    var section = $(this).val();
    
    endpoint = 'https://api.nytimes.com/svc/topstories/v2/' + section + '.json?api-key=8ac58e86a8aa4a118f15cdf99ab41333';
    $stories.empty();
    nytData = '';
    nytItems = '';
    
    
    //css changes here
    //hide loader here
    
    $.ajax({
      method: 'GET',
      url: endpoint,
      dataType: 'json'
    })
    .done(function(data) {
      nytData = data.results;
      var articleLink, articleTitle, articleImageUrl;
      
      if(nytData.lenth !==0){
        nytItems += '<ul';
        $.each(function(key, value) {
          articleImageUrl = value.multimedia[4].url;
          articleTitle = value.title;
          articleLink = value.url;
         nytItems += '<li class="article-item">';
         nytItems += '<a href=" ' +articleLink +'" target="_blank">';
          nytItems += '<div class="inner-item-wrapper">';
          nytItems += '<div class="article" style="background-image:url('+ articleImageUrl + ')">';
           nytItems += '<div class="story-meta">';
           nytItems += '<p>' +
             (articleTitle || "This story has no description.") + '</p>'
            nytItems += '</div>';
            nytItems += '</div>';
            nytItems += '</div>';
            nytItems += '</a>';
           nytItems += '</li>';
        });
           nytItems += '</ul';
           
      } else {
         nytItems += '<p class="feedback">Sorry!</p>';
      }
      
      $stories.hide().fadeIn('fast').append(nytItems);
    })
    .fail(function(){
      $stories.append('<p class="feedback">Sorry2!</p>');
    })
    .always(function() {
      $loader.hide();
    });
  });
})(jQuery);