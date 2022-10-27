const router = require('express').Router();

let data =require('../data.js');

module.exports =router;





router.get("/",(req, res) => {

    res.status(200).json(data);   

});

let nextId=4;

router.post("/", (req, res)=>{

    let yeniAktor=req.body;
    

    yeniAktor.id = nextId;
    nextId++;
    data.push(yeniAktor);
    res.status(201).json(yeniAktor);
});

router.delete("/:id", (req, res) => {
    
    const silinecekAktorId = req.params.id;
    
    
    
    const silinecekAktor = data.find(aktor => aktor.id=== Number(silinecekAktorId))

    if(silinecekAktor){

        data = data.filter(aktor=> aktor.id !== Number(silinecekAktorId))
        res.status(204).end();
        

    }else{

        res.status(404).json({errorMessage:"Silmeye çalıştığınız aktor sistemde yok."});
    } 


})





router.get("/:id",(req, res)=>{

    const {id} = req.params;
    console.log("req.body",req.body)
    const aktor = data.find(aktor => aktor.id === parseInt(id));
        if(aktor){
            res.status(200).json(aktor);
        } else{
            res.status(404).json("Aradığınız aktor bulunamadı...");
        }
    
    console.log(data.filter(urun => urun.id>1))

});



router.put("/:id", (req, res) => {

    const id= req.params.id;
    
    let editValue = req.body;
    
    
    

    const editlenecekAktor = data.find(aktor => aktor.id===Number(id));

    if(editlenecekAktor){

        if (editValue.isim) {
            editlenecekAktor.isim=editValue.isim;      
        }
        if (editValue.filmler) {
            editlenecekAktor.filmler=editValue.filmler;          
        }

        res.status(201).json(editlenecekAktor)
      
    } else{
        res.status(404).json({errorMessage:"Belirtilen Aktör Sistemimizde Bulunmamaktadır."})
    }


})