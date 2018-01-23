const test1Routes = require('./test1_routes');

module.exports = function(app, db, es) {
  test1Routes(app, db, es);
  // Other route groups could go here, in the future
};
