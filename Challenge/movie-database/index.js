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

//step4:
app.get('/search', function(req, res){
    const entry = req.query.s;
    if (entry !== undefined && entry !== ""){
        res.send({status:200, message:"ok", entry})
    }
        else{
            res.send({status:500, error:true, message:"you have to provide a search"})
   }
});


// Step 5:
const movies =[
{title: 'Jaws', year: 1975, rating: 8},
{title: 'Avatar', year: 2009, rating: 7.8},
{title: 'Brazil', year: 1985, rating: 8},
{title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2}
]
app.get('/movies/create' ,function(req, res){
    res.send("Hi");});

app.get('/movies/read' ,function(req, res){
    res.send({status:200, data: movies});});

app.get('/movies/update' ,function(req, res){
    res.send("Hello"); });

app.get('/movies/delete' ,function(req, res){
    res.send("By");
});

//Step 6
app.get('/movies/read/by-date', function(req, res){
    res.send({status:200, data: movies.sort(function(a, b){
        return (a.year - b.year)}) }) });

app.get('/movies/read/by-rating', function(req,res){
    res.send({status:200, data:movies.sort(function(a, b){
        return(a.rating - b.rating) }) }) });

app.get('/movies/read/by-title', function(req, res){
    res.send({status:200, data:movies.sort((a, b) => a.title.localeCompare(b.title))}); });

//Step 7
app.get('/movies/read/id/:id',function(req,res){
    const ID = req.params.id 
    //console.log(ID) 
    if(ID>=0 && ID<=movies.length-1){
        res.send({status:200, data:movies[ID]}) }
        else
        { res.send({status:404, error:true, message:'the movie '+ID+ ' does not exist'}) }
})

//Step 8 add a new movie
app.get('/movies/add', function(req, res){
    var newTitle = req.query.title;
    var newYear = req.query.year;
    var newRating = req.query.rating;
    // movies.unshift({title:newTitle,year:newYear,rating:newRating})
    // res.send({
    // data:movies
    // })

    if (newTitle == undefined || newYear == undefined || newYear<newYear.length || isNaN(newYear)){
        res.send({status:403, error:true, message:'you cannot create a movie without providing a title and a year'})
    }
    else if(newRating == undefined){
    movies.unshift({title:newTitle,year:newYear,rating:'4'})
        res.send({
            status:404,
            data:movies  
        })
    }
    else{
        movies.unshift({title:newTitle,year:newYear,rating:newRating})
        res.send({
            status:403,
            data:movies
    })}
})

//step 9: Delete the corresponding movie
app.get('/movies/delete/:ID', function(req, res){
    const id = req.params.ID
    if (id>=0 && id<movies.length-1){
        movies.splice(id,1);
        res.send({status: 200,
            message: movies});
        }
    else{
        res.send({status:404, error:true, message:'the movie <ID> does not exist'})
   }
});

//step 10: 

app.get('/movies/update/:id',function(req, res){
    const id = req.params.id;
    const newTitle = req.query.title;
    const newRating = parseInt(req.query.rating);
    const newYear = parseInt(req.query.year);
    
    if ( id>=0 && id<=movies.length-1){
        if (movies[id].title != newTitle){
        movies[id].title = newTitle;}
        else if (movies[id].rating != newRating){
            movies[id].rating = newRating;
        }else if(movies[id].year != newYear){
            movies[id].year = newYear;
        }
    
        res.send({status: 200,
            message: movies});
        }
        else{res.send({message:'fillllllllll'})}
})
// Step 11 - Use HTTP Verbs
// change the urls to use HTTP VERBS (look it up. Google "rest APIs", and see "how to build REST APIs with Express")
// commit ("step 11")










/* On localhost:3000/welcome
app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});*/

// Change the 404 message modifing the middleware
 app.use(function(req, res, next) {
    res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
 });

//start the server in the port 3000 !
 app.listen(3000, function () {
     console.log('Example app listening on port 3000.');
 });

