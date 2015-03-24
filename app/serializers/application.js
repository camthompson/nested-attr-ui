import DS from 'ember-data';
import Ember from 'ember';

export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  keyForAttribute(key) {
    const original = this._super(key);
    const isEmbedded = Ember.get(this, `attrs.${key}.serialize`) === 'records';
    if (isEmbedded) {
      return original + '_attributes';
    } else {
      return original;
    }
  }
});
