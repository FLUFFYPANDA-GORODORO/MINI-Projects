import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";

function Nav() {
  const [products] = useContext(ProductContext);

  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];
  // console.log(distinct_category);

  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <Link
        className="py-3 px-5 border rounded border-blue-500 text-blue-400"
        to="/create"
      >
        Add new Product
      </Link>
      <hr className="w-[80%] my-3" />
      <h1 className="text-xl w-[80%] mb-3 ">Category Filter</h1>

      <div className="w-[80%] ">
        {distinct_category.map((c, i) => (
          <Link
            key={i}
            to={`/?category=${c}`}
            className="flex items-center   mb-3"
          >
            <span className="mr-2 w-[10px] h-[10px] bg-blue-400 rounded-full"></span>
            <span className="hover:text-blue-300">{c}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
