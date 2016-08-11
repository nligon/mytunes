// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', this.enqueue, this);
    this.on('ended', this.dequeue, this);
    this.on('dequeue', this.dequeue, this);
    // this.on('dequeue', this.play, this);
  },

  playFirst: function() {
    this.models[0].play();
  },

  enqueue: function(song) {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function(song) {
    this.shift();
    if (this.length >= 1) {
      this.playFirst();
    }
  },

});
