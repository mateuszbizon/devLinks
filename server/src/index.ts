import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import errorHandler from "./middlewares/errorHandler"
import userRoutes from "./routes/userRoutes"
import authRoutes from "./routes/authRoutes"

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors({
    origin: ["http://localhost:3000", "https://dev-links-nu-sandy.vercel.app"],
    credentials: true,
}))
app.use(cookieParser())
app.set("trust proxy", 1)

app.use("/users", userRoutes)
app.use("/auth", authRoutes)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

export default app