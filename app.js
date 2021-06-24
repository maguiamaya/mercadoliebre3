const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const views = path.join(__dirname, "views");
console.log(__dirname);

app.use(express.static("public"));
app.get("/", (req, res)=> res.sendFile(path.join(views, "home.html")))
app.get("/vender.html", (req, res)=> res.sendFile(path.join(views, "vender.html")))
app.get("/ofertas.html", (req, res)=> res.sendFile(path.join(views, "ofertas.html")))
app.get("/tiendas.html", (req, res)=> res.sendFile(path.join(views, "tiendas.html")))
app.get("/ayuda.html", (req, res)=> res.sendFile(path.join(views, "ayuda.html")))
app.get("/creatucuenta.html", (req, res)=> res.sendFile(path.join(views, "creatucuenta.html")))
app.get("/ingresa.html", (req, res)=> res.sendFile(path.join(views, "ingresa.html")))
app.get("/miscompras.html", (req, res)=> res.sendFile(path.join(views, "miscompras.html")))
app.listen(port, () => console.log("servidor funcionando en el puerto " + port))