import type { NextPage } from 'next';

import { useSession } from 'next-auth/react';
import Layout from '../components/Layout';
import Login from '../pages/login';

const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <Layout>
        <Login />
      </Layout>
    </>
  );
};
export default Home;
