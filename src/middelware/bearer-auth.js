'use strict';

module.exports = (users) => (req, res, next) => {
    if (!req.headers.authorization) {
        console.error(`not found`);
        next('Invalid login');
        return;
    }

    let token = req.headers.authorization.split(' ').pop();

    users.authenticateBearer(token)
    .then((user) => {
        req.user = user;
        next();
    })
    .catch((err) => next('Invalid login'))
    
}