const express = require('express');
const friendsControllers = require('../controllers/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
    console.log(`IP address: ${req.ip}`);
    next();
});

friendsRouter.get('/', friendsControllers.getFriends);
friendsRouter.get('/:id', friendsControllers.getFriend);
friendsRouter.post('/', friendsControllers.postFriend);

module.exports = friendsRouter;