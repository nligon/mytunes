// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
      this.model.play();

    },
    'add': 'render'
  },

  render: function() {
    console.log('entry called');
    // console.log('this.$el', this.$el);
    // console.log('this.template', this.template);
    // console.log('this.model', this.model);
    // console.log('this.model.attributes', this.model.attributes);
    return this.$el.html(this.template(this.model.attributes));
  }
});
