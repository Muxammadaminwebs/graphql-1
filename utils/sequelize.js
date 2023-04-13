import { Sequelize } from "sequelize";

const sequelize=new Sequelize({
  host:'127.0.0.1',
  username:'postgres',
  password:'22',
  database:'fos',
  port:5432,
  dialect:'postgres'
})

export default sequelize