const path = require('path');

function getMessages(req, res) {
    res.render('messages', {
        messageTitle: 'A Message to a friend',
        message: 'It\'s going to rain today.'
    });
    // res.sendFile(path.join(__dirname, '..', 'public', 'images', 'colourful.png'));
}

module.exports = getMessages;