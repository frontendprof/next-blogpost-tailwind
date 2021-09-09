import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/Layout';
export default function Home({ posts }) {
  console.log(posts);
  return <Layout>hello</Layout>;
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((f) => {
    const slug = f.replace('.md', '');

    const markdownWithMeta = fs.readFileSync(path.join('posts', f), 'utf-8');

    const { data: front_matter } = matter(markdownWithMeta);

    return {
      slug,
      front_matter,
    };
  });
  console.log(posts);

  return {
    props: {
      posts,
    },
  };
}
