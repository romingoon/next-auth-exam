import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Login() {
  const { data: session, status } = useSession();

  if (session) {
    return (
      <>
        {session.user?.name} 님 반갑습니다! <br />
        <Link href="/MyPage">내 정보 보기</Link>
        {console.log(session)}
        <br />
        <button onClick={() => signOut()}>로그아웃</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn('google')}>구글로 로그인 하기</button>
      <br />
      <button onClick={() => signIn('naver')}>네이버로 로그인 하기</button>
      <br />
      <button onClick={() => signIn('kakao')}>카카오로 로그인 하기</button>
    </>
  );
}
