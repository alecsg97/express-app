const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 3000;

mongoose                        //   |
  .connect('mongodb://localhost/mongooseSeed')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));  

app.use(express.static('public'));
// app.use(express.static('views'));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");


app.use('/', require('.routes/index'));

app.listen(PORT || 3000, () => console.log(`Listening on port ${PORT}`));

//     const pageName = 'Home Screen';
//     const displayArray = ["Hats", "Dogs", "Reptiles", "Phones", 'Cars', "Nails"];

//     const blah = {
//         pageName,
//         content: displayArray,
//         showContent: displayArray.length > 5
//     }

//     // this is how you render a file having a view engine like "hbs"
//     // res.render('index', {pageName, content: displayArray, showContent: displayArray.length > 5});
//     res.render('index', blah);


//     // when your express side is an api only, then you just have to res.json the inforamtion
//     // res.json({pageName, content: displayArray});
// })

// app.get('/about', (req, res, next) => {
//     // res.sendFile(__dirname + '/views/about.html');
//     axios.get('https://pokeapi.co/api/v2/pokemon').then(apiRes => {
//         console.log({apiRes: apiRes.data.results});

//         const data = {
//             content: apiRes.data.results
//         }
//         res.render('about', data);
//     }).catch(err => {
//         console.log({err});
//         next();
//     })
//     // res.render('about');
// })

// app.get('/contact', (req, res, next) => {
//     // res.sendFile(__dirname + '/views/contact.html');
//     res.render('contact');
// })

// // ============================================
