import { readFileSync } from "fs";
import resolvers from "./users.resolvers.js";
import path from "path"
const userSchema=readFileSync(path.join(process.cwd(),"modules","users.schema.gql"),"utf-8")
export default{
  userSchema,
  resolvers
}