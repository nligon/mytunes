// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', this.enqueue, this);
    this.on('ended', this.ended, this);
    this.on('dequeue', this.dequeue, this);
    this.on('dequeue', this.play, this);
  },

  playFirst: function() {
    this.models[0].play();
  },


  enqueue: function() {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function() {
    this.remove(this.models[0]);
  },

  ended: function() {
    this.remove(this.models[0]);
    if (this.length > 0) {
      this.playFirst();
    }  
  }

});