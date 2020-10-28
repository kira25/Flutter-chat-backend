const { response } = require("express");
const User = require('../models/users');

const getUsers = async(req,res= response) => {

   const users =  await User.find().sort('-online')

   
    res.json({
        ok: true,
        msg:users
    })


}

module.exports = {
    getUsers
}