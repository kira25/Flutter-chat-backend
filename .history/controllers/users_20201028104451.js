const { response } = require("express");
const User = require('../models/users');

const getUsers = (req,res= response) => {

   const users =  await User.find()

   
    res.json({
        ok: true,
        msg:users
    })


}

module.exports = {
    getUsers
}