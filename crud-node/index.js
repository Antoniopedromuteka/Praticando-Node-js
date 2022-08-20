


const express = require('express');
const hbs = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 3000;


app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: "main",
}))




app.get("/", (req, res)=>{
    res.send("<h1>Olá mundo!</h1>");
})




app.listen(PORT, ()=>{
    console.log('listening on http://localhost:'+PORT);
})