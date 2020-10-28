const Message = require('../models/messages')

const getAllChats =async (req,res)=>{
const miId= req.uid;
const messagesFrom = req.params.de;

res.json({
    ok: true,
    msg: 'hello messages'
})

}


module.exports = {
    getAllChats
}