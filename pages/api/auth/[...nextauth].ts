import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import KaKaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    KaKaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID as string,
      clientSecret: process.env.NAVER_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async jwt({ token }) {
      return token;
    },

    async session({ session, token }) {
      console.log('session', session);

      return session;
    },
  },
});
