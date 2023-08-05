import Head from '@/components/sections/Head';
import Layout from '@/components/base/Layout';
import { woodBallBackup } from '@/hooks/woodballBackup';

function App() {
  woodBallBackup();
  return (
    <Layout>
      <Head />
    </Layout>
  );
}

export default App;
