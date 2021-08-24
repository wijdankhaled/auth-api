
'use strict'
const server=require('./src/server')
const {db} = require('./src/auth/models/index');

db.sync()
    .then(() => {
        server.start(3000);
        
    })
    .catch(console.error);