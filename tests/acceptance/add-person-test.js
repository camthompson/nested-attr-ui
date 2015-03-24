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

  andThen(function() {
    assert.equal(find('.person-name').text(), 'Jon', 'Person is added');
  });
});
