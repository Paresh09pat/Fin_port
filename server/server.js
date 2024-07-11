const express = require("express")
const connectDb = require("./utils/db")
const conRoute =  require("./router/contact-router")
const errorMiddleware = require("./middleware/error-middleware")
const cors = require("cors");
const app = express();

const corsOption = {
  origin: "http://localhost:5173",
  method: "GET , POST ,PUT ,DELETE , PATCH , HEAD",
  credential: true,
};

app.use(cors(corsOption));



app.use(express.json())

app.use("/api/form", conRoute)

app.use(errorMiddleware);

connectDb().then(()=>{
    app.listen(5000, ()=>{
        console.log("server running on port 5000")
    })
});

