import { UsersModel } from "../models/users.model.js"


const AllUsers=async()=>{
  try {
    return await UsersModel.findAll({raw:true})
  } catch (error) {
    console.log(error);
  }
}
const findById=async(userId)=>{
  try {
    console.log(userId);
    return await UsersModel.findByPk(userId)
  } catch (error) {
    console.log(error);
  }
}


export{
  AllUsers,
  findById
}