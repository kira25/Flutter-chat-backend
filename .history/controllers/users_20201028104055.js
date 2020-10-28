const { response } = require("express");
const User = require('../models/users');

const getUsers = (req,res= response) => {

   
    res.json({
        ok: true,
        msg:'Get users'
    })


}

module.exports = {
    getUsers
}