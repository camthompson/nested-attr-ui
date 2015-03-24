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
    click('.remove-person');
    andThen(function() {
      Ember.run(application, 'destroy');
    });
  }
});

test('Adding two people', function(assert) {
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
});

test('Adding a person with pets', function(assert) {
  visit('/');
  fillIn('.new-person-name', 'Jon');
  fillIn('.new-pet-name:eq(0)', 'Garfield');
  fillIn('.new-pet-name:eq(1)', 'Odie');
  click('.add-person');

  andThen(function() {
    assert.equal(find(".person:contains('Jon') .pet:contains('Garfield')").length, 1, 'Garfield is added');
    assert.equal(find(".person:contains('Jon') .pet:contains('Odie')").length, 1, 'Odie is added');
  });
});
