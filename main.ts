import cors from "cors"
import express, { Application } from "express"
import router from "./router/authRouter"

const main =(app:Application)=>{
    app.use(express.json())
    app.use(cors())
    app.use("/api/v2", router)
}

export default main