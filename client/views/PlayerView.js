// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  events: {
    "ended": "dequeue"
  },

  initialize: function(song) {
    // this.model = song;
    // this.on('ended', this.model.dequeue);
    // this.on('ended', this.model.play);
  },

  dequeue: function() {
    this.model.trigger('dequeue');
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
