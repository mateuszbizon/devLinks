import express from "express"
import { signUpController } from "../controlles/users/signUpController"
import { signInController } from "../controlles/users/signInController"
import { getUserDetailsController } from "../controlles/users/getUserDetailsController"
import { updateUserDetailsController } from "../controlles/users/updateUserDetailsController"
import { authMiddleware } from "../middlewares/authMiddleware"
import { uploadFile } from "../utils/uploadFile"

const router = express.Router()

router.post("/sign-up", signUpController)
router.post("/sign-in", signInController)
router.get("/get-user-details/:userEmail", getUserDetailsController)
router.put("/update-user-details", authMiddleware, uploadFile.single("image"), updateUserDetailsController)

export default router