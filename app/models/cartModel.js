import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({

    id:{
        type:Number,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    rating:{
        rate:{
            type:Number,
            require:true
        },
        count:{
            type:Number,
            require:true
        }
       

    },
    userid:{
        type:String,
        require:true
    },
    quantity:{
        type:Number
    },
    grandTotal:{
        type:Number
    }


})

export const carts = mongoose.models.carts || mongoose.model('carts',cartSchema)