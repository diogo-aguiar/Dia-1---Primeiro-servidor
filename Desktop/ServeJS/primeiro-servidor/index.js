const express = require("express")

const app = express();

app.get("/", function(req, res){
    res.send("Servidor rodando");
});

app.get("/Blog", function(req, res){
    res.send("Pagina do blog");
});

app.get("/sobre-empresa", function(req, res){
    res.send("Pagina sobre empresa");
});

app.get("/contatos", function(req, res){
    res.send("Pagina de contato");
});

app.listen(3000);