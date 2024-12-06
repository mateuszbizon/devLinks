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