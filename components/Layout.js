import Head from 'next/head';

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: 'Welcome to DevPosts',
  keywords: 'development post, frontend posts, programming articles',
  description:
    'Place where you can find different and useful programming related articles and posts',
};

export default Layout;
