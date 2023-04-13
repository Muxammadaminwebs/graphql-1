import { DataTypes } from "sequelize";
import sequelize from "../utils/sequelize.js";

const OrdersModel=sequelize.define('orders',{
  order_id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    unique:true,
    autoIncrement:true,
    allowNull:false
  },
  user_id:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  count:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  food_id:{
    type:DataTypes.INTEGER,
    allowNull:false
  }
},{
  tableName:'orders',
  freezeTableName:true
},)
export {OrdersModel}
