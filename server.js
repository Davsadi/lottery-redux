const express = require('express');
const path = require('path');
const port = 3007;
const app = express();
// const root = path.resolve(__dirname, 'relativePath');

app.use('express.static(__dirname'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
});


// app.use(express.static(path.resolve(root, '/lottery')));

app.listen(port);
console.log('Server started');
