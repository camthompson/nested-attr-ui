import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api',

  host: 'http://localhost:3000',


  buildURL() {
    return this._super(...arguments) + '.json';
  }
});
