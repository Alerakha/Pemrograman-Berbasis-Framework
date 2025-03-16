import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Selamat datang</h1>
      <p>Ini adalah halaman utama</p>
      <Link href="/about">Tentang kami</Link>
    </div>
  );
};

export default HomePage;
