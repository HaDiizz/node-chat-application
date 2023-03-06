const Users = require('../models/userModel')

const userCtrl = {
    users: async (req, res) => {
        try {
            const users = await Users.find()
            res.json({
                users
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

}

module.exports = userCtrl