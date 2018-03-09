import Route from '@ember/routing/route';
import { set } from '@ember/object';
//const {set}=Ember;

export default Route.extend({

  model()
  {
    return this.store.createRecord('post',{
      title:'New Title blog',
      author:'Stephen King',
      content:'Default Content'
    });
  },

  setupController(controller,model)
  {
    set(controller,'post',model);
  }
});
