import express from "express"
import { getTokenController } from "../controlles/auth/getTokenController"

const router = express.Router()

router.get("/get-token", getTokenController)

export default router