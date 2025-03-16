import { useState, useEffect } from "react";

const Productlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const products = await response.json();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Daftar Produk dengan fetch api dari /api/products.js</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Productlist;
