const jwt = require('jsonwebtoken')
const Users = require('../models/userModel')

const auth = async (req, res, next) => {
    const token = req.headers.authorization; //get token user
    if(!token) return res.status(400).json({err : 'Invalid Authentication!'})

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET) //verify token and get id user /get by Token
    if(!decoded) return res.status(400).json({err : 'Invalid Authentication'})

    const user = await Users.findOne({_id: decoded.id}) //find same id

    if(user.role !== 'admin') return res.status(400).json({err : 'Permission is denied'})
    next()
}

module.exports = auth