import { FoodsModel } from "../models/foods.model.js"


const AllFoods=async(_,res)=>{
  try {
    return await FoodsModel.findAll({raw:true})
  } catch (error) {
    console.log(error);
  }
}
export {
  AllFoods
}