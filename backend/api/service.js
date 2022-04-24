
const User = require("./model");

module.exports = class UserService {
     static async getUser(req, res, next) {
        let user;
    try {
        user = await User.findById(req.params.id)
        if(user === null) {
            return res.status(404).json({ message: 'Failed to find User'})
        }
    }
    catch (err){
        return res.status(500).json({message: 'Failed To get User'})
    }
    res.user = user
    next()
    }
};  
