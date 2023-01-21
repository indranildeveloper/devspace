import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import matter from "gray-matter";
import { marked } from "marked";
import Layout from "@/components/Layout";
import CategoryLabel from "@/components/CategoryLabel";

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", `${slug}.md`),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}

const PostPage = ({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) => {
  return (
    <Layout title={title}>
      <Link
        className="border-2 px-4 py-2 rounded-md border-gray-900 text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white"
        href="/blog"
      >
        Go Back
      </Link>
      <div className="w-full shadow-md px-10 py-6 bg-white rounded-md mt-6">
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-4xl mb-6">{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>

        <Image
          src={cover_image}
          className="rounded-md"
          alt={title}
          width={800}
          height={600}
        />

        <div className="flex justify-between items-center bg-gray-100 p-2 my-8">
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={author_image}
              alt={author}
              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            />

            <h4>{author}</h4>
          </div>
          <div className="mr-4">{date}</div>
        </div>

        <div className="blog-text mt-2">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Layout>
  );
};
export default PostPage;
