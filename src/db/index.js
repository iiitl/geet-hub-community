const express = require('express');
const cors = require('cors');
require("./conn");
const app = express();
app.use(cors());
const Port = process.env.PORT || 4000;
const contract = require("./models/contacts");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/addition',async (req,res)=>{
    try{
        await contract.updateOne(
           {$push:{contractlist:{
            id:req.body.id,
            track:req.body.title,
            genre:req.body.genre,
            author:req.body.author,
            link:req.body.link
           }}}
        ).exec();
        
        return res.status(201).json({
            message:"successful"
        });
    }catch(err){
        console.log(err);
        return res.status(400).json({
            message:"unsuccessful"
        });
    }
})

app.put('/deletion',async(req,res)=>{
    try{
        const ids=req.body.id;
        console.log(ids);
        await contract.updateOne({ $pull:{contractlist:{id:ids}}}).exec();
        return res.status(202).json({
            message:'successful'
        })
    }catch(err){
        res.status(400).json({
            message:"unsuccessful"
        })
    }
})
app.get('/fetching',async(req,res)=>{
    try{
        const all = await contract.find({"_id":"6343876fe3977026a9fd87bb"});
        return res.status(201).json({
            all
        });
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
})

app.listen(Port, () => {
    console.log('server is running on port ' + Port);
})