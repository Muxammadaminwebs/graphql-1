import { AllFoods } from "../controller/foods.controller.js";
import { AllUsers } from "../controller/users.controller.js";
import { AllOrders} from "../controller/order.controller.js";
const resolvers={
  Query:{
    orders:()=>AllOrders()
  },
  Order:{
    orderId:parent=>parent.order_id,
    userId:parent=>parent.user_id,
    food:async parent=>{
      let foods=await AllFoods();
      return foods.find(food=>food.food_id==parent.food_id)
    },
    user:async parent=>{
      let users=await AllUsers();
      return users.find(user=>user.user_id==parent.user_id)
    }
  }
}

export default resolvers