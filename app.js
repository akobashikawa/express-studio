const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('Express Studio');
});

app.listen(3000, () => {
    console.log('ExpressJS server running...');
});