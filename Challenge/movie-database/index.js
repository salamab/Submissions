// Require express and create an instance of it
var express = require('express');
var app = express();

// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
    res.send('ok');
});

app.get('/test', function(req, res){
    res.send({status:200, message:"ok"})
})

app.get('/time', function(req, res){
   var time = new Date();
    res.send({status: 200,
        message: time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
    })
})

app.get('/hello/:ID', function(req, res){
    res.send({status:200, 
        message:'Hello,'+ req.params.ID
})
});


app.get('/search', function(req, res){
    const entry = req.query.s;
    if (entry !== undefined && entry !== ""){
        res.send({status:200, message:"ok", entry})
    }
        else{
            res.send({status:500, error:true, message:"you have to provide a search"})
        }
    
});




/* On localhost:3000/welcome
app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});*/

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});
