import Head from '@/components/sections/Head';
import Layout from '@/components/base/Layout';
import { woodBallBackup } from '@/hooks/woodballBackup';
import Main from '@/components/sections/Main';

function App() {
  woodBallBackup();
  return (
    <Layout>
      <Head />
      <Main />
    </Layout>
  );
}

export default App;
