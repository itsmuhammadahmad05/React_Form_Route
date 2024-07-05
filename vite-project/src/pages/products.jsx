import { useEffect, useState } from "react";
import axiosInstance from "../axios/axios.js";
import ProductCard from "../components/ProductCard.jsx";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const Products = () => {
  const [productArr, setProductArr] = useState([]);
  const [searchedProductArr, setSearchedProductArr] = useState([]);
  const [searchString, setSearchString] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const getProducts = async () => {
    if (params.categoryName) {
      const res = await axiosInstance.get(
        `/products/category/${params.categoryName}`,
      );

      if (res.data.length) {
        setProductArr(res.data);
        setSearchedProductArr(res.data);
      } else {
        navigate("/products");
      }
    } else {
      const res = await axiosInstance.get("/products");
      setProductArr(res.data);
      setSearchedProductArr(res.data);
    }
  };
  useEffect(() => {
    getProducts();
  }, [params]);

  useEffect(() => {
    const filteredArr = productArr.filter((product) => {
      return product.title.toLowerCase().includes(searchString.toLowerCase());
    });
    setSearchedProductArr(filteredArr);
  }, [searchString]);

  return (
    <>
      <h1 className="mt-6 text-center text-6xl font-extrabold">Products</h1>
      <form className="mx-auto mt-5 max-w-md">
        <label
          htmlFor="default-search"
          className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchString}
            onChange={(event) => {
              setSearchString(event.target.value);
            }}
            id="default-search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search"
            required
          />
        </div>
      </form>
      <div className="w-full p-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {searchedProductArr.map((product) => {
            return (
              <ProductCard
                key={product.id}
                image={product.image}
                id={product.id}
                name={product.title}
                price={product.price}
                category={product.category}
                description={product.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export { Products };
