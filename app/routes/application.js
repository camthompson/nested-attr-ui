import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('person');
  },

  actions: {
    addPerson(personName, petName1, petName2) {
      const pets = [petName1, petName2].compact().map((petName) => {
        return this.store.createRecord('pet', { name: petName });
      });
      const person = this.store.createRecord('person', { name: personName });
      person.get('pets').addObjects(pets);
      person.save().then(function() {
        pets.forEach(function(pet) {
          pet.deleteRecord();
        });
      });
    },

    removePerson(person) {
      person.destroyRecord();
    }
  }
});
