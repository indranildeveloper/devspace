import Layout from "@/components/Layout";

const AboutPage = () => {
  return (
    <Layout title="About DevSpace">
      <h1 className="text-4xl border-b-4 pb-6 font-bold">About</h1>

      <div className="bg-white shadow-md rounded-md px-10 py-6 mt-6">
        <h3 className="text-2xl mb-4">DevSpace Blog</h3>
        <p>This is a blog built with NextJS and Markdown</p>
        <p>
          <span className="font-bold">Version:</span>1.0.0
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
