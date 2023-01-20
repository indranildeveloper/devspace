import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";

const NotFoundPage = () => {
  return (
    <Layout title="Page Not found">
      <div className="flex flex-col items-center mt-20">
        <Image
          src="/images/logo.png"
          className="bg-gray-800 rounded-md"
          width={70}
          height={70}
          alt="logo"
        />

        <h1 className="text-6xl my-5">Whoops!</h1>
        <h2 className="text-4xl text-gray-400 mb-6">
          This page does not exists!
        </h2>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
