const { response } = require("express");
const User = require('../models/users');

const getUsers = (req,res= response) => {

    const user = User.find


}

module.exports = {
    getUsers
}