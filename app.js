const express = require("express")
const cors = require("cors")
// const bodyParser = require("body-parser")
const port = 3001;
 
const app = express();
app.use(cors());


let aniArray = ["ant", "lion", "tiger", "bear"]

const isAnimalMiddleware = (req, res, next) =>{
    let input = req.params.species
    
  if(aniArray.includes(input)){
      next();
    } else {
        res.json("this animal is not included")

    }
}

app.get("/animal/:species",isAnimalMiddleware,(req,res)=>{
    res.json({status:"Success", message: true})
})

app.get("/", (req, res)=>{
    res.json("hello")
})


app.listen(port, ()=>{
    console.log(`Server is listening to port ${port}`)
})