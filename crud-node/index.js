


const express = require('express');
const hbs = require('express-handlebars');

const bodyParser = require('body-parser');
const session = require("express-session");

const app = express();

const PORT = process.env.PORT || 3000;

// Configuracao basica do handlebars
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: "main",
})); app.set('view engine', 'hbs');

// importando models usuario

const Usuario = require('./models/Usuario');
const { request } = require('express');



app.use(bodyParser.urlencoded({
    extended: false
}))

//CONGIGURATION SECTIONS

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
}))

app.use(express.static("public"));




app.get("/", (req, res)=>{
    if(req.session.erros){
        let arrayErros = req.session.erros;
        req.session.erros = "";
        return res.render("index", {navActiveCard: true, error : arrayErros})
    }
    if(req.session.sucess){
        req.session.sucess = false;
        return res.render("index", {navActiveCard: true, msgSucess: true})
    }
    res.render('index',{navActiveCard: true});
})


app.get("/users", (req, res)=>{
    Usuario.findAll().then((valores)=>{

        // console.log(valores.map((valores)=> valores.toJSON()));
        if(valores.length > 0){
           return res.render('users',{navActiveUsers: true, table: true, usuarios: valores.map((valores)=> valores.toJSON())})
        }
        return res.render("users", {navActiveUsers: true, table: false})
    }).catch((err)=>{
        console.log("ouve um problema"+err);
    })
    
})

app.post("/editar", (req, res)=>{

    var id = req.body.id;

 
    Usuario.findByPk(id).then((dados)=>{
        return res.render('editar', {erro: false, id: dados.id, nome: dados.nome, email: dados.email})

    }).catch((err)=>{
       return res.render('editar', {erro: true, problema: "nao e possivel editar este registro"})
    });

    // res.render('editar')
})


app.post("/cad", (req, res)=>{
    var nome = req.body.nome;
    var email = req.body.email;

    const erros = [];

    nome = nome.trim();
    email = email.trim();

    nome = nome.replace(/[^A-z??-??\s]/gi, "");
    
    nome.trim();

         //VERIFICAR SE EST?? VAZIO OU N??O CAMPO
   if (nome =='' || typeof nome == undefined || nome == null){
    erros.push({mensagem: "Campo nome n??o pode ser vazio!"});
   }

   //VERIFICAR SE O CAMPO NOME ?? V??LIDO (APENAS LETRAS)
   if(!/^[A-Za-z??????????????????????????????????????????????????????????????\s]+$/.test(nome)){
    erros.push({mensagem:"Nome inv??lido!"});
   }

   //VERIFICAR SE EST?? VAZIO OU N??O CAMPO
   if (email =='' || typeof email == undefined || email == null){
    erros.push({mensagem: "Campo email n??o pode ser vazio!"});
   }

   //VERIFICAR SE EMAIL ?? VALIDO
   if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    erros.push({mensagem:"Campo email inv??lido!"});
    }

    if(erros.length > 0){
        console.log(erros);   
        
        req.session.erros = erros;
        req.session.sucess = false;

        return res.redirect("/")
    }


    Usuario.create({
        nome: nome,
        email: email.toLowerCase(),
    }).then(()=>{
        req.session.sucess = true;
        console.log("usuario cadastrado com sucesso");
        return res.redirect("/");
    }).catch((err)=>{
        console.log("ups alguma coisa deu errado:"+err);
    })
    console.log("validacao realizada com sucesso!");



})


app.post("/update", (req, res)=>{
    var nome = req.body.nome;
    var email = req.body.email;

    const erros = [];

    nome = nome.trim();
    email = email.trim();

    nome = nome.replace(/[^A-z??-??\s]/gi,"");
    
    nome.trim();

         //VERIFICAR SE EST?? VAZIO OU N??O CAMPO
   if (nome =='' || typeof nome == undefined || nome == null){
    erros.push({mensagem: "Campo nome n??o pode ser vazio!"});
   }

   //VERIFICAR SE O CAMPO NOME ?? V??LIDO (APENAS LETRAS)
   if(!/^[A-Za-z??????????????????????????????????????????????????????????????\s]+$/.test(nome)){
    erros.push({mensagem:"Nome inv??lido!"});
   }

   //VERIFICAR SE EST?? VAZIO OU N??O CAMPO
   if (email =='' || typeof email == undefined || email == null){
    erros.push({mensagem: "Campo email n??o pode ser vazio!"});
   }

   //VERIFICAR SE EMAIL ?? VALIDO
   if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
    erros.push({mensagem:"Campo email inv??lido!"});
    }

    if(erros.length > 0){
        console.log(erros);   
        
        return res.status(400).send({status:400, erro:erros});
    }


    Usuario.update({
        nome: nome,
        email: email.toLowerCase()
    },
    {
        where:{
            id: req.body.id,
        }
    }
    ).then(()=>{
        return res.redirect("/users")
    }).catch((err)=>{
        console.log(err);
    })

})


app.post("/deletar", (req, res)=>{
    Usuario.destroy({
        where:{
            id: req.body.id,
        }
    }).then(()=>{
        return res.redirect("/users")

    }).catch((err)=>{

        console.log(err);
    })
})


app.listen(PORT, ()=>{
    console.log('listening on http://localhost:'+PORT);
})