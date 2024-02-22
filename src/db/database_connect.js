import mongoose from "mongoose"
import dotenv from "dotenv"

import { MONGODB_NAME } from "../constants.js"


dotenv.config({
  path:'./public/temp/.env'
});

const connectDB = async() => {
    try {
 
      await mongoose.connect(`${process.env.MONGODB_URL}${MONGODB_NAME}`)

      console.log("Database Connected")
    } catch (error) {
      console.log("Database Connection Failed" ,error)
     
    }
  }
  
  export default connectDB;

  