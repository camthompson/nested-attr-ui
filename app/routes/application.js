import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('person');
  },

  actions: {
    addPerson(personName, petName1, petName2) {
      let pets = [petName1, petName2].compact().map((petName) => {
        return this.store.createRecord('pet', { name: petName });
      });
      let person = this.store.createRecord('person', { name: personName });
      person.get('pets').addObjects(pets);
      person.save();
    },

    removePerson(person) {
      person.destroyRecord();
    }
  }
});
