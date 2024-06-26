import express, {static as static_, json} from "express";
import cors from "cors";
import { config } from "dotenv";
import { join } from "path";

//dotenv configuartion
config();

//rest object
const app = express();

//midlewares
app.use(cors());
app.use(json());

//Static Files
app.use(static_(join(__dirname,'./client/build')))

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get('*',function(req,res){
  res.sendFile(join(__dirname,'./client/build/index.html'))
})

//port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});
