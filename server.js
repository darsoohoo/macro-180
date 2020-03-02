const express = require('express');

const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/items', require('./routes/items'))


// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.NODE_ENV || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));