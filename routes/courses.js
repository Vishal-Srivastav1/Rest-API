const ex=require("express")
const {route} = require("express/lib/application")
const coursemodel= require("../models/course")

const router=ex.Router()

// creating the routers

// get all the Courses
router.get("/", async (req,res)=>{
  try {
    const allcourse=await coursemodel.find()
    res.json(allcourse)
  } catch (error) {
    res.json(error)
  }
})

// get Single Courses

router.get("/:courseId", async (req,res) =>{
    const courseId=req.params.courseId 
    try {
     const singlecourse= await coursemodel.findById(courseId)
     res.json(singlecourse)
    } catch (error) {
        res.json(error)
    }
})




// create Courses
router.post("/", async (req,res)=>{
    
        try {
          const cretourse = await coursemodel.create(req.body)
          res.json(cretourse)
   
        } catch (error) {
          res.json(error)
        }

})


//delete  Courses
router.delete("/:courseId", async (req,res) =>{
       try {
         await coursemodel.remove({_id:req.params.courseId})
        res.send("delete")

       } catch (error) {
        res.json(error)
       }
     
})


// update courese Courses
router.put("/:courseId", async (req,res) =>{
  const courseId=req.params.courseId 

    try {
        const updtcourse= await coursemodel.updateOne(
          {
            "_id":courseId
          },
          req.body
        )
           res.json(updtcourse)
    } catch (error) {
      res.json(error)
    }


})






module.exports=router;