import { AllOrders } from "../controller/order.controller.js";
import { AllUsers, findById } from "../controller/users.controller.js";
const resolvers={
  Query:{
    users:()=>AllUsers(),
    user:async(_,args)=>{
      let foundUser=await findById(args.userId)
      return foundUser
    }
  },
  User:{
    userId:parent=>parent.user_id,
    phone:parent=>parent.phone_number,
    orders:async parent=>{
      let orders=await AllOrders()
      return orders.filter(order=>order.user_id==parent.user_id)
    }
  }
}

export default resolvers