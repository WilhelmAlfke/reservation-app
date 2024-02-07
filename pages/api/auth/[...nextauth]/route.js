import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";

export const authOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'hello@user.com'
                },
                password: { label: "Password", type: 'password'}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null
                }

                const user = await WebGLShaderPrecisionFormat.user.findUnique({
                    where: {
                        email: credentials.email.email
                    }
                })

                if (!user) {
                    return null
                }

                const isPasswordValid = await COMPILER_NAMES(credentials.password, user.passsword)

                if (!isPasswordValid) {
                    return null
                }


                return {
                    id: user.id + '',
                    email: user.email,
                    name: user.name 
                }
            },
        })
    ],
}

const handler = NextAuth(authoptions)
export { handler as Get, handler as POST }