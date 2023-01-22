import Link from "next/link";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import { getPosts } from "@/lib/post";

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  };
}

const HomePage = ({ posts }) => {
  return (
    <Layout>
      <h1 className="text-4xl border-b-4 p-4 font-bold">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

      <Link
        href="/blog"
        className="block text-center border-2 border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-300 ease-in select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow w-full"
      >
        More Posts
      </Link>
    </Layout>
  );
};

export default HomePage;
