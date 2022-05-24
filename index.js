const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0:27017/mid2')
app.set('view engine', 'ejs')

const User = require('./userSchema')
app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/register',function(req,res){
        res.render("regisform")
    });

    app.post('/user/register',function(req,res){
        User.create(req.body,function(err,user){
            console.log(user)
        })

        mongoose.then(function(db){
            db.collection('users').insertOne(req.body)
        })
        res.send('Data received:\n' + JSON.stringify(req.body));
    })

app.listen(3000,function(){
    console.log('server is listening at port 3000')
})