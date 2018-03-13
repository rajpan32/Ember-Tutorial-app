import DS from 'ember-data';
import Model from 'ember-data/model';

const {
  attr,
  belongsTo
}=DS;


export default Model.extend({
    userId: belongsTo('users'),
    title: attr('string'),
    body: attr('string')
});
