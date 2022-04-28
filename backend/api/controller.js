const express = require("express");
const router = express.Router();
const UserService = require('./service');


router.post('/', async (req,res) => {
    const user = await UserService.createUser(req.body);
    user ? res.status(200).send(user) : res.status(404).send({ error: "Unable to create User" })
})
router.get('/', async (req,res) => {
    const showUsers = await UserService.showUsers()
    showUsers ? res.status(200).send(showUsers) : res.status(404).send({error: 'Unable to get files'})
});

router.get('/:id', async (req, res) => {
    const getOneUser = await UserService.showUser(req.params.id);
    getOneUser ?  res.status(200).send(getOneUser)  :  res.status(404).send({error: 'Unable to get file'})
});

router.patch('/:id', async (req,res) => {
    const user = await UserService.updateUser(req.params.id, req.body);
    user ? res.status(200).send(user) : res.status(404).send({ error: "No user found with matching id." })
});

router.delete('/:id', async (req,res)=> {
    const user = await UserService.deleteOneUser(req.params.id);
    !user.error ? res.status(200).send({status: 'succesfully deleted file :) '}) :  res.status(404).send({ error: "Unable to delete file" });
});




module.exports = router;