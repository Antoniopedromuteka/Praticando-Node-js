


const express = require('express');
const hbs = require('express-handlebars');

const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

// Configuracao basica do handlebars
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: "main",
})); app.set('view engine', 'hbs');




app.use(bodyParser.urlencoded({
    extended: false
}))


app.use(express.static("public"));




app.get("/", (req, res)=>{
    res.render('index',{navActiveCard: true});
})


app.get("/users", (req, res)=>{
    res.render('users',{navActiveUsers: true})
})

app.get("/editar", (req, res)=>{
    res.render('editar')
})


app.post("/cad", (req, res)=>{
    res.send(req.body.nome);
})


app.listen(PORT, ()=>{
    console.log('listening on http://localhost:'+PORT);
})