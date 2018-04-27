// var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
// url += '?' + $.param({
//   'api-key': "8ac58e86a8aa4a118f15cdf99ab41333",
//   'callback': "callback"
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });
//
// $( "select" ).change(function() {   // <<<<< this is the correct syntax
//   var str = "";
//   $( "select option:selected" ).each(function() {
//     str += $( this ).text() + " ";
//   });
// })
//
// $(function() {
//   //set variables for data and HTML targets
//   var newImage newsHeadline = $('.dropdown');
//
//   $('select').on('change', function(event) {
//     event.preventDefault();
//
//     //Empty vars each time the form is submitted
//     $albumList.empty();
//     albumData, albumItems = '';
//
//     //get the search string
//     artistName = $('#artist-name').val(),itunesUrl = "https://itunes.apple.com/search?entity=album&limit=6&term=" + artistName;
//
//     //Get data from the api
//     $.ajax({
//       method: 'GET',
//       url: itunesUrl,
//       dataType: 'jsonp'
//     })
//     //If it works...
//     .done(function(data) {
//       albumData = data.results;
//       //For each loop using keys and values for list items
//       $.each(albumData, function(key, value) {
//         albumItems += '<li>';
//         albumItems += '<img src="' + value.artworkUrl100 + '" />';
//         albumItems += '<p>'+
//           value.collectionName + '</p></li>';
//       });
//       //Output the entire list to the <ul>
//       $albumList.append(albumItems);
//     })
//     //If it fails, output an error
//     .fail(function() {
//       $albumList.append('<li>Sorry! There was a problem, please try search again.</li>');
//     });
//   });
// });



$( ".dropdown" ).change(function() {
  alert( "Handler for .change() called." );
});
