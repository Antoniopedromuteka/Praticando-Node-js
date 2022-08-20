


const express = require('express');
const hbs = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 3000;

// Configuracao basica do handlebars
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: "main",
})); app.set('view engine', 'hbs');


app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render('index')
})


app.get("users", (req, res)=>{
    res.send("users")
})



app.listen(PORT, ()=>{
    console.log('listening on http://localhost:'+PORT);
})