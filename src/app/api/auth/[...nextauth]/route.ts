import { api } from '@/lib/axios'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials) {
        const response = await api.post('/sessions', {
          email: credentials?.email,
          password: credentials?.password,
        })

        const accessToken = response.data.access_token

        if (accessToken) {
          return accessToken
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: '/sign-in',
  },
  session: {
    maxAge: 60 * 60, // 1 minutes
  },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }
