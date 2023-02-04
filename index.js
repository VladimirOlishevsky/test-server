// node js way

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//     console.dir(req.url);
//     // will get you  '/' or 'index.html' or 'css/styles.css' ...
//     // • you need to isolate extension
//     // • have a small mimetype lookup array/object
//     // • only there and then reading the file
//     // •  delivering it after setting the right content type
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('ok');
// }).listen(3001);


// express js way
// Imports
const express = require('express')
const app = express()
const port = 3001

// Static Files
app.use(express.static('dist'));
// Specific folder example
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/images'))

// Navigation
app.get('', (req, res) => {
    res.render('index')
})

// second page
// app.get('/about', (req, res) => {
//    res.sendFile(__dirname + '/views/about.html')
// })

app.listen(port, () => console.info(`App listening on port ${port}`))