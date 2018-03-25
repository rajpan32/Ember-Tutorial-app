import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({


  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType)
  {
    
    return this._super(store, primaryModelClass, payload, id, requestType);
  }

});
