const express=require('express')
 const router=express.Router()
const acl=require('../middelware/acl')
const bearerAuth=require('../middelware/bearer-auth')
const models = require('../models/index')
const {users}=require('../models/index')




router.post('/create', bearerAuth(users), acl('create'), (req, res) => {
    res.status(200).send('Ok! I have create permissions');
});

router.put('/update', bearerAuth(users), acl('update'), (req, res) => {
    res.status(200).send('Ok! I have update permissions');
});

router.delete('/delete', bearerAuth(users), acl('delete'), (req, res) => {
    res.status(200).send('Ok! I have delete permissions');
});

module.exports=router;


