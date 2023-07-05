import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authApi } from "@/service/Auth.service";

export default NextAuth({
    session:{
       jwt:true
    },
    providers:[
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials){
                const email = credentials.email;
                const password = credentials.password;
                const signin = await authApi.login({email,password});
                if (signin.status === 400 && signin.data.success === false) {
                    throw new Error(signin.data.message);
                }else if (signin.status === 200 && signin.data.success === true) {
                    return signin.data.user;
                }
            }
        })
    ],
    
});
