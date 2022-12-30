import express from "express";
import "express-async-errors";
import cors from "cors";
import routers from "./routers/routers";
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);
app.use(errorHandler);

export default app;