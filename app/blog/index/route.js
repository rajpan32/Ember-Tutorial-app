import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({

  setupController(controller,model)
  {
    set(controller,'post',model);
  }
});
