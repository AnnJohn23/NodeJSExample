const entity = require('../model/empEntity');

//GET
exports.findAll = (req,res)=>{
    entity.find()
    .then(result =>{
        res.send(result);
    }).catch(err=>{
        res.status(500).send({
            message:err.message||"Error occured"
        })
    })

}

//GET BY ID
exports.findById =(req,res)=>{
    entity.findById(req.params.id)
    .then(result=>{
        if(!result){
            return res.status(404).send({
                message:"id is not found"+req.params.id
            })
        }
        else res.send(result)
    }).catch(err=>{
        res.status(500).send({
            message:"Error Occured"
        })
    })
}

//POST
exports.save =(req,res)=>{
    //create req body
   const data = new entity({
       name:req.body.name,
       tech:req.body.tech,
       salary:req.body.salary
   })
   //save data
data.save()
.then(result=>{
    res.send(result);
}).catch(err=>{
    res.status(500).send({
        message:'Error occured'
    })
})
}

//update data
exports.update=(req,res)=>{
   entity.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        tech:req.body.tech,
        salary:req.body.salary  
    },{new:true})
    .then(result=>{
        if(!result){
            return res.status(404).send({
                message:"Id not found"
            })
        }
        else res.send({ message: "Data was updated successfully." });  
    }).catch(err=>{
        res.status(500).send({
            message:"Error Occured"
        })
    })
}
//DELETE
exports.delete = (req,res)=>{
    entity.findByIdAndRemove(req.params.id)
    .then(result=>{
        if(!result){
            return res.status(404).send({
                message:"Id is not found"+req.params.id
            })
        }
        else  res.send({message: "Note deleted successfully!"});
    }).catch(err=>{
        res.status(500).send({
            message:"Error occured"
        })
    })
}


