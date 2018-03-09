import Route from '@ember/routing/route';
import { set } from '@ember/object';


export default Route.extend({

  setupController(controller,model)
  {
    set(controller,'post',model);
    set(controller,'editable',true);
  },

  actions:{
    goBackToIndex()
    {
      this.transitionTo('blog.index');
    },
    toggleEdit()
    {
      this.controller.toggleProperty('editable');
    }
  }
});
