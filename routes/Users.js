const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/User');
users.use(cors());

process.env.SECRET_KEY = 'secret';

users.post('/register', (req, res) =>{
    const today = new Date();
    const userData = {
        username: req.body.username,
        first_password: req.body.password,
        last_password: req.body.password,
        create: today,
    };
    User.findOne({
        where:{
            username: req.body.username
        }
    }).then (user => {
            if(!user){
                bcrypt.hash(req.body.first_password, 10, (err, hash)=>{
                    userData.first_password = hash;
                    User.create(userData)
                        .then(user =>{
                            res.json({status: user.username + 'Вы зарегестрировались'})
                        })
                        .catch(err =>{
                            res.send('err' + err)
                        })
                })
            }else {
                res.json({error: 'Пользователь уже существует'})
            }
        }).catch(err =>{
            res.send('error' + err)
        }
    )
});

users.post('/login', (req, res)=>{
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then (user =>{
        if(user){
            if(bcrypt.compareSync(req.body.first_password, user.first_password)){
                const token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1400
                });
                res.send(token)
            }
        }else {
            res.status(400).json({error: 'Пользователь не найден'})
        }
    }).catch(err =>{
        res.status(400).json({error: err})
    })
});

    users.get('/admin', (req, res)=>{
        let decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);

        User.findOne({
            where: {
                id: decoded.id
            }
        }).then(user=>{
            if(user){
                res.json(user)
            }else{
                res.send('Пользователь не найден')
            }
        }).catch(err=>{
            res.send('error:' + err)
        })
    });


module.exports = users;