import dotenv from "dotenv"
import connectDB from "../src/db/database_connect.js";

// const app=express();
dotenv.config({
    path:'./.env'
});
connectDB();