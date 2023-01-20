import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import { sortByDate } from "@/utils/index";

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate).slice(0, 6),
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
        className="block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease-in select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow w-full"
      >
        More Posts
      </Link>
    </Layout>
  );
};

export default HomePage;
