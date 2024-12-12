const express = require("express");
const cors = require("cors");
const Signup = require("../Server/model/signup");
const { ConnectionStates } = require("mongoose");

const UserRoute = require("../Server/Routes/userRoutes");
const { default: mongoose } = require("mongoose");

const app = express();

mongoose
.connect("mongodb://localhost:27017")
.then(() => console.log("mongodb connected successfully"))
.catch((error) => console.log(error));

app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.use("/user", UserRoute);

app.listen(3000,()=>{
    console.log("Server is running");
}
);
