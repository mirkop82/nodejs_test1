const test1Routes = require('./test1_routes');

module.exports = function(app, db) {
  test1Routes(app, db);
  // Other route groups could go here, in the future
};
