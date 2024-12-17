import express from "express"
import { signUpController } from "../controlles/users/signUpController"

const router = express.Router()

router.post("/sign-up", signUpController)

export default router