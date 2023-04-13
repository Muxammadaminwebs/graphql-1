import { DataTypes } from "sequelize";
import sequelize from "../utils/sequelize.js";

const UsersModel=sequelize.define('users',{
  user_id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    unique:true,
    autoIncrement:true,
    allowNull:false
  },
  username:{
    type:DataTypes.STRING(32),
    allowNull:false
  },
  phone_number:{
    type:DataTypes.BIGINT,
    unique:true,
    allowNull:false
  }
},{
  tableName:'users',
  freezeTableName:true
},)
export {UsersModel}
