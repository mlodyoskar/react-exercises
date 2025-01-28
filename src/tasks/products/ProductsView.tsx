import { useState } from "react";
import { products as productsMock } from "./items";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const ProductsView = () => {
  const [products] = useState<Product[]>(productsMock);

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>

      {/* Category Filter */}
      <div className="mb-4">
        <label htmlFor="category" className="mr-2">
          Filter by Category:
        </label>
        <select id="category" className="p-2 border rounded">
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="minPrice" className="mr-2">
          Min Price:
        </label>
        <input
          type="number"
          id="minPrice"
          className="p-2 border rounded mr-4"
        />
        <label htmlFor="maxPrice" className="mr-2">
          Max Price:
        </label>
        <input type="number" id="maxPrice" className="p-2 border rounded" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold truncate">
                {product.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2 truncate">
                {product.category}
              </p>
              <p className="text-gray-900 font-bold text-xl">
                ${product.price}
              </p>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {product.description}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
