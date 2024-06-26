
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path')

//dotenv configuartion
dotenv.config();

//midlewares
app.use(cors());
app.use(express.json());


//rest object
const app = express(); 


//Static Files
app.use(express.static(path.join(__dirname,'./client/build')))

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

//port
const PORT = process.env.PORT || 8000;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning On PORT ${PORT} `);
});
