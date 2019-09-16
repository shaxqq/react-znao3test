const axios = require('axios');

export const register = newUser =>{
    return axios
        .post('register', {
            user_name: newUser.user_name,
            password: newUser.password,
        }).then(res =>{
            console.log('Вы зарегестрировались')
        })
};

export const login = user =>{
    return axios
        .post('login', {
            user_name: user.user_name,
            password: user.password,
        }).then(res =>{
            localStorage.setItem('usertoken', res.data);
            return res.data
        }).catch(err =>{
            console.log(err)
        })
};
