const mongoose = require('mongoose');

mongoose
    .connect(
        'mongodb+srv://julescweb:4mFV8SKxEdGYZbbi@cluster0.ol50vsh.mongodb.net/cookchef?retryWrites=true&w=majority'
    )
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log('Error connecting to database', err);
    });
