const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.set('port', port);

app.get('/', (req, res) => {
    res.send('Express Studio');
});

app.listen(port, () => {
    console.log(`ExpressJS server running on port ${port}...`);
});