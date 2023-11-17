'use strict';
module.exports = function (app) {
    var userHandlers = require('../controllers/userController.js');
    app.route('/auth/register')
        .post(userHandlers.register);
    app.route('/auth/sign_in')
        .post(userHandlers.sign_in);
    app.route('/get_all')
        .get(userHandlers.get_all);
    app.route('/edit/:id')
        .put(userHandlers.edit);
};