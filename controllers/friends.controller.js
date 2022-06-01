const friends = require('../models/friends.model');

function getFriends(req, res) {
    res.json(friends);
}

function getFriend(req, res) {
    var friendID = Number(req.params.id);
    var friend = friends[friendID];

    if(friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: 'Friend does not exist.'
        });
    }
}

function postFriend(req, res) {
    if(!req.body.name) {
        return res.status(400).json({
            error: 'Friend is missing.'
        });
    }

    friends.push({
        id: friends.length,
        name: req.body.name
    });

    res.status(200).json(friends);
}

module.exports = {
    getFriends,
    getFriend,
    postFriend
};