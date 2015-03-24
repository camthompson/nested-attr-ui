import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('person');
  },

  actions: {
    addPerson(name) {
      this.store.createRecord('person', { name: name }).save();
    },

    removePerson(person) {
      person.destroyRecord();
    }
  }
});
