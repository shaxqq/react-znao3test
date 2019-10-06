import axios from 'axios';

export const register = newUser =>{
    return axios
        .post('users/register', {
            username: newUser.username,
            first_password: newUser.first_password,
            last_password: newUser.last_password,
        }).then(res =>{
        localStorage.setItem('usertoken', res.data);
        return res.data});
};

export const login = user =>{
    return axios
        .post('users/login', {
            username: user.username,
            first_password: user.first_password,
        }).then(res =>{
            localStorage.setItem('usertoken', res.data);
            return res.data
        }).catch(err =>{
            console.log(err)
        })
};
