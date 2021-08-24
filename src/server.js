const express=require('express')
const app=express()
app.use(express.json())
const router=require('./auth/router/user')
const router2=require('./auth/router/user')
// const acl = require('./router/v2');
const v2=require('./routes/v2');
const start=(port)=>{
app.listen(port,()=>{
    console.log(`server up ${port}`)
});
}

app.get('/', (req, res) => {
    res.status(200).send('Hello to bearer-auth server ')
})

app.use(router);
app.use(router2);
app.use(v2);
module.exports={
    start,
    app
}