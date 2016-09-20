// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  
  url: 'https://api.parse.com/1/classes/songs/',
  model: SongModel,
  parse: function(response) {
    return response.results;
  },
  initialize: function() {
    this.fetch();
  }

  
  









  // initialize: function() {
  //   $.ajax({
  //     url: 'https://api.parse.com/1/classes/songs/',
  //     type: 'GET',
  //     datatype: 'json',
  //     success: function(data) {
  //       console.log(this);
  //     },
  //     error: function(error) {
  //       console.log('error: ', error);
  //     }


  //   });
  // },

  



});