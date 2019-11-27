var express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("git started!!!");
})

app.listen(9898,()=>{
    console.log("Server Started!!!!!");
})