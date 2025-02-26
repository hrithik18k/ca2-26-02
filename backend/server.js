const express = require('express')
const app = express();
const port = 3000;
app.use(express.json());

app.get('/',(req,res)=>{
    try {
        res.status(200).send("email: admin@admin.com | password: admin")
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

app.post("/login",(req,res)=>{
    try {
        const{email,password} = req.body;

    if(!email){
        return res.status(400).json({error:"Email cannot be empty"});
    }
    if(!password){
        return res.status(400).json({error:"password cannot be empty"})
    }
    if(email == "admin@admin.com" && password == "admin"){
        return res.status(200).json({message:"Admin logged in Successfully "})
    } else{
        return res.status(400).json({message:"Error in login"});
    }
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

app.listen(port,()=>{
    console.log(`server is running in port ${port}`)
})