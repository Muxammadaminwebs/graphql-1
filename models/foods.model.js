import { DataTypes } from "sequelize";
import sequelize from "../utils/sequelize.js";

const FoodsModel=sequelize.define('foods',{
  food_id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    unique:true,
    autoIncrement:true,
    allowNull:false
  },
  food_name:{
    type:DataTypes.STRING(32),
    allowNull:false
  },
  price:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  food_img:{
    type:DataTypes.STRING,
    allowNull:false
  }
},{
  tableName:'foods',
  freezeTableName:true
},)
export {FoodsModel}
