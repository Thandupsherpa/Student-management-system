import express from "express";
import { userLogin } from "./auth/user.login.js ";
import { userRegister } from "./auth/user.register.js";

const app = express();

app.use("/auth/login", userLogin);
app.use("/auth/register", userRegister);

app.listen(5000, () => {
  console.log(`App running at port 5000`);
});
