import Link from "next/link";

const CategoryList = ({ categories }) => {
  return (
    <div className="w-full p-5 bg-white rounded-md shadow-md mt-6">
      <h3 className="text-2xl bg-gray-800 text-white p-3 mb-4 rounded">
        Blog Categories
      </h3>
      <ul>
        {categories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.toLowerCase()}`}>
            <li className="p-4 cursor-pointer hover:bg-gray-100">{category}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
