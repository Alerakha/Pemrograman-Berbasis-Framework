import React from "react";

const Blog = ({ Products }) => {
  return (
    <div>
      <h1>Daftar Produk fetch langsung ke API</h1>
      {Products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const Products = await res.json();

  return {
    props: {
      Products,
    },
  };
}

export default Blog;
