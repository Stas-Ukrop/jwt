import Cat from '../model/cat.js'

const getAll=async()=>{
    const result=await Cat.find()
    return result
}

const getById=async(id)=>{
    const results=await Cat.findOne({_id:id})
    return results
}

const remove = async(id)=>{
    const result =await Cat.findOneAndRemove({_id:id})
        return result
}

const create = async(body)=>{
    const result = await Cat.create(body)
    return result
}

    const update=async(id,body)=>{
        const result =await Cat.findOneAndUpdate(
            {_id:id},
            {...body},
            {new:true})
        return result
    }

export default {
    getAll,
    getById,
    remove,
    create,
    update
}