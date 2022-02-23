var fetchModel= require('../models/fetch-model');


const product_all=async(req,res)=>{
  try{
const prods=await fetchModel.find();
res.json(prods)

  }catch (error){
    res.json({message:error})
  }

}


module.exports={
  product_all,
}