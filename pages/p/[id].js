import { useRouter } from 'next/router';
import Layout from '../components/MyLayout';

const Post = () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <p> This is the blog post content</p>
    </Layout>
  );
};

export default Post;