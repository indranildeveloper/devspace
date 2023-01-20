import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-100 shadow w-full">
      <div className="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center">
        <Link
          className="flex md:w-1/5 font-medium items-center md:justify-start mb-4 md:mb-0"
          href="/"
        >
          <Image src="/images/logo.png" width={40} height={40} alt="logo" />
          <h1 className="ml-2 text-xl">DevSpace</h1>
        </Link>

        <nav className="flex flex-wrap md:w-4/5 gap-4 items-center justify-end text-base md:ml-auto">
          <Link
            className="uppercase transition-all hover:text-indigo-300"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className="uppercase transition-all hover:text-indigo-300"
            href="/about"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
