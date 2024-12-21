export type ProfileLink = {
    id: string;
    platform: string;
    link: string;
}

export type ProfileDetailsFormValues = {
    name: string, 
    surname: string, 
    email: string, 
    image: string | null
}

export type PopupMessage = {
    id: string
    messageType: string
    message: string
}

export type User = {
    id: string
    email: string
}