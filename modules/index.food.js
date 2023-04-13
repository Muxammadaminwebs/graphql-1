import { readFileSync } from "fs";
import resolvers from "./food.resolvers.js";
import path from "path"
const foodSchema=readFileSync(path.join("modules","food.schema.gql"),"utf-8")
export default{
  resolvers,
  foodSchema
}