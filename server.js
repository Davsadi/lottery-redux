const express = require('express');
const path = require('path');
const port = 3007;
const app = express();

// app.use('/lottery', express.static('__dirname'));

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'index.html'))
// });


var sub1 = express();
sub1.get("/", function(req, res){
  res.json({status: "SUCCESS!!!!!!"});
});

var sub2 = express();
sub2.get("/", function(req, res){
  res.json({
    foo: "bar",
    baz: "quux"
  });
});

// main app
// --------
app.use("/lottery", sub2);
app.use("/", sub1);


app.listen(port);
console.log('Server started');
