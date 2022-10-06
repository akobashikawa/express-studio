const express = require('express');
const app = express();

const PORT = 3000

app.get('', (req, res) => {
    res.send('Express Studio');
});

app.listen(PORT, () => {
    console.log(`ExpressJS server running on port ${PORT}...`);
});