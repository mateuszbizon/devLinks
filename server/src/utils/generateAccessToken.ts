import jwt from "jsonwebtoken"
import { ACCESS_TOKEN } from "../constants";
import { AccessTokenPayload } from "../types";

export default function generateAccessToken({ id }: AccessTokenPayload) {
    return jwt.sign({
        id
    }, ACCESS_TOKEN, { expiresIn: "15m" })
}