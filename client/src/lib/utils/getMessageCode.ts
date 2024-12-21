import { MESSAGE_CODES, MESSAGES } from "@/constants/messages"

export default function getMessageCodes(messageCode: string, message: string): string {
    const messages: { [key: string]: string } = {
        [MESSAGE_CODES.emailTaken]: MESSAGES.user.emailTaken,
        [MESSAGE_CODES.invalidCredentials]: MESSAGES.auth.invalidCredentials,
        [MESSAGE_CODES.validationFail]: message,
    }

    return messages[messageCode] || "Something bad happened"
}