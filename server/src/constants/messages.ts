export const MESSAGES = {
    user: {
        emailTaken: "Email already taken",
        userCreated: "User account has been successfully created",
        userSignIn: "User signed in successfully",
        userNotFound: "User not found",
        userDetailsRetrieved: "User details retrieved successfully"
    },
    auth: {
        notAuthenticated: "User not authenticated",
        invalidCredentials: "Email or password incorrect",
        invalidToken: "Token is invalid",
        tokenExpired: "Token is expired. Sign in again",
        tokenRetrieved: "Token retrieved successfully"
    },
    database: {
        databaseFail: "Database problem"
    },
    forbidden: {
        notAuthorized: "Unauthorized"
    }
}

export const MESSAGE_CODES = {
    validationFail: "VALIDATION_FAIL",
    emailTaken: "EMAIL_TAKEN",
    invalidCredentials: "INVALID_CREDENTIALS"
}