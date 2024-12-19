import express from "express"
import { signUpController } from "../controlles/users/signUpController"
import { signInController } from "../controlles/users/signInController"
import { getUserDetailsController } from "../controlles/users/getUserDetailsController"

const router = express.Router()

router.post("/sign-up", signUpController)
router.post("/sign-in", signInController)
router.get("/get-user-details/:userEmail", getUserDetailsController)

export default router