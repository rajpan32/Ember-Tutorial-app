import Model from 'ember-data/model';
import DS from 'ember-data';

const {
  attr,
  hasMany
}=DS;

export default DS.Model.extend({
  posts:hasMany('posts'),
  name: attr('string'),
  email: attr('string'),
  phone: attr('string'),
  website: attr('string'),
});
