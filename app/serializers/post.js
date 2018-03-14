import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType)
  {
    payload={post:payload};

    // payload.post.forEach((post)=>
    // {
    //     post.user=post.userId;
    //     delete post.userId;
    // });
    //console.log(payload);
    //return this._super(...arguments);
    return this._super(store, primaryModelClass, payload, id, requestType);
  },

normalizeSingleResponse(store, primaryModelClass, payload, id, requestType)
{
  payload.post.user=payload.post.userId;
  delete payload.post.userId;
  return this._super(store, primaryModelClass, payload, id, requestType);
},


normalizeArrayResponse(store, primaryModelClass, payload, id, requestType)
{
    payload.post.forEach((post)=>
  {
      post.user=post.userId;
      delete post.userId;
  });
  return this._super(store, primaryModelClass, payload, id, requestType);
}

});
