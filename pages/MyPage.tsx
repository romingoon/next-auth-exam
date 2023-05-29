import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Layout from '../components/Layout';
import styles from './mypage.module.css';

export default function MyPage() {
  const { data: session } = useSession();
  return (
    <>
      <Layout>
        {session?.user && (
          <>
            <h1>내 정보</h1>
            {session.user.image && (
              <div className="container">
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className={styles.avatar}
                />

                <span>이름: {session.user.name}</span>
                <br />
                <span>이메일: {session.user.email}</span>
              </div>
            )}
          </>
        )}
        <br />
        <Link href="/">홈으로 돌아가기</Link>
      </Layout>
    </>
  );
}
