const mongoose =require("mongoose");

const schema= new mongoose.Schema({
    identificationNumber:String,
    name:String,
    lastName:String,
    dateOfIssue:String,
    dateOfBirth:String,
    dateOfExpiry:String,
    inputImageUrl:String,
    status:{
        type:String,
        enum:['SUCCESS','Failure'],
        default: 'SUCCESS'
    }
})

const model =mongoose.model('Card',schema);
module.exports={model};