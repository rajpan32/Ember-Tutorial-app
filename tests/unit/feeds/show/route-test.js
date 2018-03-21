import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | feeds/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:feeds/show');
    assert.ok(route);
  });
});
