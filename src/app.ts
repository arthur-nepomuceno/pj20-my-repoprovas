import express from "express";
import cors from "cors";
import routers from "./routers/routers";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);

export default app;