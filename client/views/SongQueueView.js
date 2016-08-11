// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',
  event: {
    render: 'enqueue'
  },

  initialize: function() {
    console.log('sqv initializing')
    this.render();
    this.on('enqueue', this.render, this);

  },

  enqueue: function() {
    console.log('queueview')
    this.render();
  },

  render: function() {
    console.log('rendering sqv!');
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
console.log('rendering sqv after detach!');
console.log('test', this);
    this.$el.html('<th>Song Queue</th>').append(


      this.collection.map(function(song) {
        console.log('appending sqv!');
        console.log('no song right?');
        return new SongQueueEntryView({model: song}).render();
      })


    );
  }

});
