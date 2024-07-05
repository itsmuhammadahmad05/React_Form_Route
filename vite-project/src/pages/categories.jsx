import { useState, useEffect } from "react";
import axiosInstance from "../axios/axios.js";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [categoryArr, setCategoryArr] = useState([]);

  const getCategory = async () => {
    try {
      // API call to get categories
      const response = await axiosInstance.get("/products/categories");
      console.log(response.data);
      setCategoryArr(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-12 text-center text-6xl font-extrabold">Categories</h1>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {categoryArr.map((category) => (
          <div
            key={category.id}
            className="cursor-pointer rounded-lg border p-6 hover:bg-gray-100"
          >
            <NavLink
              to={`/products/${category}`}
              className="text-700 font-bold"
            >
              {category}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
