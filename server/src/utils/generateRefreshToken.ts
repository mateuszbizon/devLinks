import jwt from "jsonwebtoken"
import { REFRESH_TOKEN } from "../constants/index";
import { RefreshTokenPayload } from "../types";

export default function generateRefreshToken({ id, email }: RefreshTokenPayload) {
    return jwt.sign({
        id, email
    }, REFRESH_TOKEN, { expiresIn: "7d" })
}