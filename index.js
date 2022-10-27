const express = require('express');
const aktorlerRouter = require('./routers/aktorlerRouter');
const logger = require('./middlewares/logger');
const errorHandling = require('./middlewares/errorHandling');
const server = express();
server.use(express.json());
server.use(logger); // Log yapması için Router'dan önce gelmeli.
server.use("/aktorler",aktorlerRouter);





server.get('/',(req, res) => {

   res.send("Express'ten Merhabalar");

});

server.use(errorHandling); // Error Handling en sona konmaktadır.Gerekli endpointleri gezer. Hata ile karşılaşınca gösterecektir.

server.listen(5000,() =>{
    console.log("http://localhost:5000 adresine gelen istekler dinleniyor...");
});