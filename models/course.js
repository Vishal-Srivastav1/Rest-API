const mongoose=require("mongoose")

const lib= mongoose.Schema({
  
   name :{
      type: String,
      require:true
   },
   page :Number,
   price :Number
})

module.exports=mongoose.model("books",lib)