import DS from 'ember-data';

const{
  Model,
  attr
}=DS;
export default Model.extend({
    name: attr('string'),
    author: attr('string'),
    content: attr('string')
});
