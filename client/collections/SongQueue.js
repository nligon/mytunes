// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(data) {
    this.on('add', this.enqueue, this);
    this.on('ended', this.dequeue, this);
    this.on('dequeue', this.dequeue, this);
    // this.on('enqueue', this.enqueue, this);
  },

  playFirst: function() {
    this.models[0].play();
  },

  enqueue: function(song) {
    if (this.length === 1) {
      this.playFirst();
    }
    console.log('prepush', this)
    this.trigger('render', this);
    

  },

  dequeue: function(song) {
    this.remove(this.models[0]);
    if (this.length >= 1) {
      this.playFirst();
    }
  },

});
