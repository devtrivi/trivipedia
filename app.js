const express = require ('express') //esto corre el server virtual
const app = express() // aca esta el cetro de poder, esto maneja el server
const l = console.log;
// const s = res.send;
const volleyball = require ('volleyball')
const db = require("./db")

app.use(volleyball) ;

app.use("/z",(req,res,next)=>{
    // l("entraste en /")
    res.send("bienvenido al seed de trivipedia")
})

db.sync()
    .then(()=>{
       
app.listen(3000,()=>{
l("server corriendo en puerto 3k")    
})
})
