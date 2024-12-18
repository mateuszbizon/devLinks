import express from "express"
import { signUpController } from "../controlles/users/signUpController"
import { signInController } from "../controlles/users/signInController"

const router = express.Router()

router.post("/sign-up", signUpController)
router.post("/sign-in", signInController)

export default router