var app = require('express')();
var http = require('http').Server(app);
var hbs = require('hbs');
var fs = require('fs');
//var express = require('express');
//app = express();
//http = require('http');



// app.use(express.static(__dirname + '/public'));
// app.get('/css/recipe.css', function(req, res)
// {
//     res.send('css/recipe.css');
//     res.end();
// });

app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.get('/', function(req, res) {
    var messages = JSON.parse(
        fs.readFileSync('messages.json', 'utf8')
    );
    res.render(__dirname + '/recipe.html', {
        messages
    });
});

app.get('/messages', function(req,res){
    console.log(req.query);
    var messages = JSON.parse(fs.readFileSync('messages.json', 'utf8'));
    messages.push(req.query);
    fs.writeFileSync('messages.json', JSON.stringify(messages));
    res.redirect('/');
})

app.get('/ingredInput', function(req, res) {
    var messages = JSON.parse(
        fs.readFileSync('messages.json', 'utf8')
    );
    res.setHeader('Content-Type', 'application/json');
    res.send(messages)
});

http.listen(3000, function() {
    console.log("listening on port 3000");
})



