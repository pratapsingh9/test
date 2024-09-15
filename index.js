import express from 'express'
const app = express()


app.get('/',(req,res)=>{
    return res.json({
        msg:"Not Working"
    })
})


app.listen(3000,()=>console.log("Working"))