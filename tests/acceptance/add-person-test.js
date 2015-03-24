import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'nested-attrs-ui/tests/helpers/start-app';

var application;

module('Acceptance: Add person', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('Adding a person', function(assert) {
  visit('/');
  fillIn('.new-person-name', 'Jon');
  click('.add-person');
  fillIn('.new-person-name', 'Seymour');
  click('.add-person');

  andThen(function() {
    assert.equal(find('.person-name:eq(0)').text(), 'Jon',
                 'Jon is added');
    assert.equal(find('.person-name:eq(1)').text(), 'Seymour',
                 'Seymour is added');
  });

  click('.remove-person:eq(0)');
  click('.remove-person:eq(0)');

  andThen(function() {
    assert.equal(find('.person-name').length, 0, 'People are removed');
  });
});
