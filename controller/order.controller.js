import { OrdersModel } from "../models/order.model.js";

const AllOrders = async (_, res) => {
  try {
    return await OrdersModel.findAll({raw:true})
  } catch (error) {
    console.log(error);
  }
};
export { AllOrders };
