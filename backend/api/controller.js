const express = require("express");
const router = express.Router();
const User = require('./model');
const UserService = require('./service');


router.get('/', async (req,res) => {
    try {
        const user = await User.find()
        res.json(user)
    }
    catch {
        res.status(500).json({message:'Unable to get all Users'})
    }
})
router.get('/:id', UserService.getUser, (req,res) => {
    res.send(res.user)
})
router.post('/', async (req,res) => {
    const user = new User({
        name: req.body.name,
        age: req.body.age
    })
    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }
    catch(err){
        res.status(400).json({message: 'Unable to create User'})
    }
})

router.patch('/:id', UserService.getUser, async (req,res) => {
    if(req.body.name != null){
        res.user.name = req.body.name
    }
    if(req.body.age != null){
        res.user.age = req.body.age
    }
    try{
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    }
    catch (err){
        res.status(400).json({message: 'Unable with updating User'})
    }


})
router.delete('/:id', UserService.getUser, async (req,res) => {
    try{
        await res.user.remove()
        res.json({message:'Deleted User'})
        }
        catch {
            res.status(500).json({message: 'Unable with Deleting User'})
        }
})




module.exports = router;