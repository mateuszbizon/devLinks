import express from "express"
import { signUpController } from "../controlles/users/signUpController"
import { signInController } from "../controlles/users/signInController"
import { getUserDetailsController } from "../controlles/users/getUserDetailsController"
import { updateUserDetailsController } from "../controlles/users/updateUserDetailsController"
import { authMiddleware } from "../middlewares/authMiddleware"
import { uploadFile } from "../utils/uploadFile"
import { updateUserLinksController } from "../controlles/users/updateUserLinksController"

const router = express.Router()

router.post("/sign-up", signUpController)
router.post("/sign-in", signInController)
router.get("/get-user-details/:userEmail", getUserDetailsController)
router.put("/update-user-details", authMiddleware, uploadFile.single("image"), updateUserDetailsController)
router.put("/update-user-links", authMiddleware, updateUserLinksController)

export default router