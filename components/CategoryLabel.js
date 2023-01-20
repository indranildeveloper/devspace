import Link from "next/link";

const CategoryLabel = ({ children }) => {
  const colorKey = {
    JavaScript: "yellow",
    CSS: "blue",
    Python: "green",
    PHP: "purple",
    Ruby: "red",
  };

  let backgroundColor = `bg-${colorKey[children]}-600`;

  return (
    <div className={`${backgroundColor} px-2 py-1 rounded-md text-gray-100`}>
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
};

export default CategoryLabel;
