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
        user_name: req.body.user_name,
        password: req.body.password,
        create: today,
    };
    User.findOne({
        where:{
            user_name: req.body.user_name
        }
    }).then (user => {
            if(!user){
                bcrypt.hash(req.body.password, 10, (err, hash)=>{
                    userData.password = hash;
                    User.created(userData)
                        .then(user =>{
                            res.json({status: user.user_name + 'Вы зарегестрировались'})
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
            user_name: req.body.user_name
        }.then (user =>{
            if(user){
                if(bcrypt.compareSync(req.body.password, user.password)){
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
    })
});

module.exports = users;