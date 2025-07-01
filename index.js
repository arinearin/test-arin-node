let express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/iflove', (req, res) => {
    res.render('iflove');
});

app.get('/ifdontlove', (req, res) => {
    res.render('ifdontlove');
});

app.listen(port, () => {
    console.log(`runing server from arin on port ${port}`)
})