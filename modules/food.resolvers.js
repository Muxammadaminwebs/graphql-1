import { AllFoods } from "../controller/foods.controller.js"

const resolvers={
  Query: {
    foods: () => AllFoods(),
  },
  Food:{
    foodId:(parent)=>parent.food_id,
    foodName:(parent)=>parent.food_name,
    foodImg:(parent)=>parent.food_img,
  }
}
export default resolvers