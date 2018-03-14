import Route from '@ember/routing/route';
import { set } from '@ember/object';


export default Route.extend({

//controller can be set here or in the contoller file
  setupController(controller,model)
  {
    set(controller,'posttest',model);
    //set(controller,'editable',true);
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
