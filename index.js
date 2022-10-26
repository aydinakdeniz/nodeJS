const express = require('express');
const server = express();
const data =require('./data.js');

server.get('/',(req, res) => {

   res.send("Express'ten Merhabalar");

});




server.get("/aktorler",(req, res) => {

    res.status(200).json(data);   

});



server.get("/aktorler/:id",(req, res)=>{

    const {id} = req.params;
    const aktor = data.find(aktor => aktor.id === parseInt(id));
        if(aktor){
            res.status(200).json(aktor);
        } else{
            res.status(404).send("Aradığınız aktor bulunamadı...");
        }
    
    

})

server.listen(5000,() =>{
    console.log("http://localhost:5000 adresine gelen istekler dinleniyor...");
});