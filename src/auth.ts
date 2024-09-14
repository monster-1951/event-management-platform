import NextAuth, { CredentialsSignin } from "next-auth";
import credentials from "next-auth/providers/credentials";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./DataBase/helpers/connectDB";
import User from "./DataBase/models/User.model";
import { compare } from "bcryptjs";
import { USer } from "./types/types";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email Address", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string;
        const password = credentials.password as string;
        if (!(email && password)) {
          throw new CredentialsSignin("Please enter your Email and password");
        }

        await connectDB();

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
          throw new Error(`User doesn't exist`);
        }

        if (!password) {
          throw new Error(`Enter the password`);
        }

        const isMatched = await compare(password, user.password);

        if (!isMatched) {
          throw new Error("Wrong Password");
        }

        const UserData: USer = {
          userName: user.userName,
          dp: user.dp,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          contact: user.contact,
          _id: user._id.toString(),
          createdAt: user.createdAt,
          password: user.password,
          bio: user.bio,
          eventsInvolvedIn: user.eventsInvolvedIn,
          eventsAttended: user.eventsAttended,
          eventsToBeAttended: user.eventsToBeAttended,
          wishToAttended: user.wishToAttended,
        };
        // console.log(user,"🎶");

        return UserData;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      // console.log('JWT callback:', token, user)
      if (user) {
        token._id = user._id;
        token.userName = user.userName;
        token.dp = user?.dp;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
        token.contact = user.contact;
        token.createdAt = user.createdAt;
        token.password = user.password;
        token.bio = user.bio;
        token.eventsInvolvedIn = user.eventsInvolvedIn;
        token.eventsAttended = user.eventsAttended;
        token.eventsToBeAttended = user.eventsToBeAttended;
        token.wishToAttended = user.wishToAttended;
      } else if (token.sub) {
        token.id = token.sub;
      }
      return token;
    },

    async session({ session, token }) {
      // console.log('Session callback:', session, token)
      if (token) {
        session.user = {
          _id: token._id || token.sub,
          userName: token.userName,
          email: token.email,
          dp: token.dp,
          firstName: token.firstName,
          lastName: token.lastName,
          contact: token.contact,
          createdAt: token.createdAt,
          password:token.password,
          bio:token.bio,
          eventsInvolvedIn: token.eventsInvolvedIn,
          eventsAttended:token.eventsAttended,
          eventsToBeAttended:token.eventsToBeAttended,
          wishToAttended:token.wishToAttended
        };
      }
      return session;
    },

    signIn: async ({ user, account }) => {
      if (account?.provider === "credentials") {
        return true;
      } else {
        return false;
      }
    },
  },
});
