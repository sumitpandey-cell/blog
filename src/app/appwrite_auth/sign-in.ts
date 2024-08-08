import { Client, Account } from "appwrite";
import signinSchema from "@/schemas/signinSchema";

export const signIn = async ({email, password}: signinSchema) => {
    try {
        const client = new Client()
            .setEndpoint(process.env.APPWRITE_API_ENDPOINT as string)
            .setProject(process.env.APPWRITE_PROJECT_ID as string); 

        const account = new Account(client);

        const signinUser = await account.createEmailPasswordSession(email, password);
        try {
            return signinUser;
        } catch (error) {
            console.log("User not found");
            
        }

    } catch (error: any) {
        console.log("Error in sign in");
        throw new Error(error.message)
    }
}