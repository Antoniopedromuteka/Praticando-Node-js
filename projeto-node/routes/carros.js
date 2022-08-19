

const express = require('express');




const router = express.Router();


router.get("/",(req, res) => {
    res.send('Rota Carros');
})


router.get("/fiat",(req, res) => {
    res.send('Rota Fiat')
})



router.get("/:marca/:modelo",(req, res) => {
    res.send(req.params)
})


router.get("/:marca",(req, res) => {
    const marcas = ["mercedes","volkvagam", "toyota"];

    if(marcas.includes(req.params.marca)){
          res.send(req.params)
    }else{
        res.status(404).send("<h1>Marca não encontrada</h1>")
    }
})





module.exports = router;