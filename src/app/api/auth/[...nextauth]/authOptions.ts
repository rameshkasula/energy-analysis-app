/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import prisma from "@/helpers/prisma-helper";
import { generateAccessToken } from "@/helpers/token-helper";
import { ENV_VARIABLES } from "@/helpers/constants";
import { getServerSession } from "next-auth";

const authOptions = {
  pages: {
    signIn: ENV_VARIABLES.authUrl + "/auth/sign-in",
    signOut: ENV_VARIABLES.authUrl + "/auth/sign-in",
    error: ENV_VARIABLES.authUrl + "/auth/sign-in",
    verifyRequest: ENV_VARIABLES.authUrl + "/auth/sign-in",
  },

  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Invalid credentials");
          }

          const { email, password } = credentials;

          const user = await prisma.user.findUnique({
            where: {
              email,
            },
          });

          if (!user || !(await bcrypt.compare(password, user.password))) {
            return null;
          }

          const accessToken = generateAccessToken(user?.id);

          const userData = {
            ...user,
            token: accessToken,
          };

          return userData;
        } catch (error) {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: ENV_VARIABLES.AUTH_SECRET,
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },

    async session({ session, token }: any) {
      const { password, ...user } = token;
      session.user = user;
      return session;
    },
  },
};

export async function getAuthSession() {
  return await getServerSession(authOptions);
}

export default authOptions; // export default authOptions;
