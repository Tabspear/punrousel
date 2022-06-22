const express = require("express")

const server = express();


server.use(express.static("layouts"))

server.listen(process.env.Port || 3000, ()=>console.log('Server is running'))