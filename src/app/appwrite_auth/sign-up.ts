import { Client, Account, ID } from "appwrite";
import signupSchema from "@/schemas/signupSchema"

export const signUp = async ({email, password, username}:signupSchema) => {
    try {
        const client = new Client()
            .setEndpoint(process.env.APPWRITE_API_ENDPOINT as string)
            .setProject(process.env.APPWRITE_PROJECT_ID as string);  

        const account = new Account(client);
        const newAccount = await account.create(ID.unique(), email, password);
        console.log("signup complete");
        
        return newAccount;
    } catch (error: any) {
        console.log("Error in sign up");
        throw new Error(`Error in signup ${error.message}`)
    }
}