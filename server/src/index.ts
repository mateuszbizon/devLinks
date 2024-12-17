import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}))
app.use(cookieParser())

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

export default app