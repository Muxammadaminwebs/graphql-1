import { readFileSync } from "fs";
import resolvers from "./order.resolvers.js";
import path from "path";
const orderSchema=readFileSync(path.join(process.cwd(),"modules","order.schema.gql"),"utf-8")
export default{
  orderSchema,
  resolvers
}