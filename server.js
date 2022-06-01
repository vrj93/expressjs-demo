const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const friendsRouter = require('./routes/friends.route');
const messagesRouter = require('./routes/messages.route');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use((req, res, next) => {
    const startTime = Date.now();
    next();
    const endTime = Date.now() - startTime;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${endTime}`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Express-Demo',
        header: 'A beautiful digital art!'
    });
});

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
});