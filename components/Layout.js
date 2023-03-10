import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <Search />
      <main className="container mx-auto my-8">{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Welcome to DevSpace",
  description: "The best info and news in development",
  keywords: "development, coding, programming",
};

export default Layout;
