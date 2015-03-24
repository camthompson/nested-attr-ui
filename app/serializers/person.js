import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    pets: { serialize: 'records' }
  }
});
