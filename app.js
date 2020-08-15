//initializing express
const express = require('express');
const app = express();

//registering for view engine
app.set('view engine','ejs');
//is view files are in some other file than views, for ex. myviews
//app.set('views','myviews');


app.listen(3000);
//-----------without using ejs-----------------------
//routing
//sending html page
// app.get('/',(req,res)=>{
//     res.sendFile('./views/index.html', { root: __dirname});
// });
// app.get('/about',(req,res)=>{
//     res.sendFile('./views/about.html', { root: __dirname});
// });
// //redirecting
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about');
// });
// //returning 404 page
// app.use((req,res)=>{
//     res.status(404).sendFile('./views/404.html', { root: __dirname});
// });


//---------------using ejs----------------------------
app.get('/',(req, res)=>{
    const blogs = [
        {title: "mario", snippet: "mario is a famous character from video games"},
        {title: "naruto", snippet: "famous anime character"},
        {title: "hulk", snippet: "well known marvel superhero"}
    ];
    res.render('index', {title: 'home', blogs});
});
app.get('/about',(req, res)=>{
    res.render('about', {title: 'about'});
});
app.get('/blogs/create',(req, res)=>{
    res.render('create', {title: 'create'});
});
app.use((req,res) =>{
    res.status(404).render('404');
});