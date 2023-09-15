import express, { json } from "express";
import router from "./router/index.router";

const app = express();
app.use(json());

app.use(router);
const port: number = Number(process.env.PORT) || 5000;
app.listen(port, ()=>{console.log(`Server running on port ${port}...`)})