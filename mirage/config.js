export default function() {

   //this.get('feeds');
  // this.get('feeds/:id');

  //collection of data
//   this.get('feeds', function(db,request) {
// debugger;
//     return {
//       data: db.feeds.all((attrs) => (
//         {type: 'feeds', id: attrs.id, attributes: attrs }
//       ))
//     };
//   });


  this.get('feeds', (schema) => {
    //debugger;
  return schema.feeds.all();
});


  //single data
  this.get('feeds/:id', function(db, request) {
    let id = request.params.id;

    return {
      data: {
        type: 'feeds',
        id: id,
        attributes: db.feeds.find(id)
      }
    };
  });




  this.passthrough('https://jsonplaceholder.typicode.com/**');

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
