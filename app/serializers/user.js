import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType)
  {
    payload={user:payload};

    if(typeof(payload.meta) !== 'object'){
          payload.meta = {};
        }

    //console.log(payload);
    //return this._super(...arguments);
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
