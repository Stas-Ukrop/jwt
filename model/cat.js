import mongoose from 'mongoose'
const {Schema, model} = mongoose

const catSchema = new Schema({
    name: String,
    age: {
        type: Number,
        min: 0,
        max: 35
    },
    isVaccinated: {
        type: Boolean,
        default: false
    },
    owner: {
        type:mongoose.SchemaTypes.ObjectId,ref:'user'
    },
    features: {
        type: Array,
        set: (data) => (!data ? [] : data)
    }
}, {
    versionKey: false,
    timestamps: true
},)

const Cat = model('cat', catSchema)

export default Cat
