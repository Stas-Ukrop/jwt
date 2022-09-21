import Cats from '../repositories/index.js'

const getAll=async(req,res,next)=>{
    try{
        const cats=await Cats.getAll()
        res.json({status:'success',code:200,data:{cats}})
    }catch(error){
        next(error)
    }
}

const getById=async(req,res,next)=>{
    try{
        const cat=await Cats.getById(req.params.id)
        if(cat){
            return res.json({status:'success',code:200,data:{cat}})
        }
        return res.json({status:'error',code:404,message:'Not found'})
    }catch(error){
        next(error)
    }
}

const create=async(req,res,next)=>{
    try{
        const cat=await Cats.create(req.body)
        res.status(201).json({status:'success',code:201,data:{cat}})
    }catch(error){
        next(error)
    }
}

const remove = async(req,res,next)=>{
    try{
        const cat=await Cats.remove(req.params.id)
        if(cat){
            res.status(201).json({status:'success',code:204,data:{cat}})
        }
        return res.json({status:'error',code:404,message:'Not found'})
    }catch(error){
        next(error)
    }
}

const update = async(req,res,next)=>{
    try{
        const cat=await Cats.update(req.params.id,req.body)
        if(cat){
            res.status(201).json({status:'success',code:204,data:{cat}})
        }
        return res.json({status:'error',code:404,message:'Not found'})
    }catch(error){
        next(error)
    }
}

export default{
    getAll,
    getById,
    remove,
    create,
    update
}