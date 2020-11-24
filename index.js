'use strict';

import express from "express";
import config from "config";
import router from "./api/router.js";
import cors from "cors";
import bodyparser from "body-parser";
const app = express();


app.get('/',(req,res)=>res.send(`Server Running on ${config.server.host}:${config.server.port}`))
app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

router(app);

app.listen(config.server.port,()=>console.log(`Server started..));
