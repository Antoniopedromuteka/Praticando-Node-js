



// // const calc = require('./modules/calculadora')


// // import { calculadora, multiplicar } from "./modules/calculadora.js";

// // const {somar, subtrair} = calculadora;

// // console.log(somar(2,2));
// // console.log(subtrair(2,2));


// // console.log(multiplicar(2,2));


 
// const http = require('http');
// const hostname = "192.168.100.13" //localhost;
// const PORT = process.env.PORT || 3000;

// const server = http.createServer((req, res)=>{

       
//         let url = req.url;

//         if(url === "/"){

//             res.statusCode = 200;
//             res.setHeader("Content-type", "text/html; charset=utf-8");
//             res.end("<h1>olá pessoal!</h1>")
//         }

//         if(url === "/sobre"){

//             res.statusCode = 200;
//             res.setHeader("Content-type", "text/html; charset=utf-8");
//             res.end("<h1>Página Contatc</h1>")
//         }

//         if(url === "/teste"){

//             res.statusCode = 200;
//             res.setHeader("Content-type", "text/html; charset=utf-8");
//             res.end("<h1>Página test</h1>")
//         }
     
     

//     }
// )



// server.listen(PORT, hostname,()=>{
//     console.log(`servidor rodando em http://${hostname}:${PORT}`);
// })

const carros = require("./routes/carros");


const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

//GET, PUT, POST, DELETE
// app.get("/", (req,res)=>{

//     res.sendFile(__dirname + "/public/index.html");
// })

app.use("/carros", carros)

app.get("/", (req, res,next)=>{
    console.log("Eu sou um middleware");
    next();
})

app.get("/", (req, res,next)=>{
    console.log("Eu sou um segundo middleware");
    next();
})

app.get("/", (req, res)=>{
    res.send("<h1>Pagina inicial</h1>");
})

const userlogged = true;


app.get("/restrita", (req, res,next)=>{
    if(!userlogged) res.redirect("/");

    res.send("rota restrita");

    next();
})

app.get("/restrita/usuarios", (req, res)=>{

    res.send("rota usuarios");

});



app.listen(PORT,()=>{
    console.log(`servidor rodando em http://localhost:${PORT}`);
});