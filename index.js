const express=require('express');
const {PORT} =require("./src/config/serverConfig")

const server= async()=>{

    const app=express();
   app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    //console.log(process.env);
   })
}

server();