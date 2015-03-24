import Ember from 'ember';

export default Ember.Route.extend({
  _initPeople: function() {
    this.set('people', []);
  }.on('init'),

  model: function() {
    return this.get('people');
  },

  actions: {
    addPerson(name) {
      this.get('people').addObject({ name: name });
    }
  }
});
