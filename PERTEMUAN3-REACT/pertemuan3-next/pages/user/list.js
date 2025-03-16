import React from "react";
import Link from "next/link";

const Multiple = ({ users, posts }) => {
  return (
    <div className="min-h-screen text-gray-700 bg-gray-100 flex items-center justify-center">
      <div className="p-6 max-w-xl mx-7 my-6 bg-white shadow-2xl rounded-3xl">
        <h1 className="text-3xl text-gray-800 font-bold mb-4">
          List of Users:
        </h1>
        <ul className="grid grid-cols-2 sm:grid-cols-2 gap-6">
          {users.map((user) => (
            <li key={user.id}>
              <Link href={`/user/${user.id}`}>
                <p className="text-lg text-blue-600 hover:underline">
                  {user.name}
                </p>
              </Link>
              <p>{user.username}</p>
              <p>{user.email}</p>
              <br />
            </li>
          ))}
        </ul>
        <br />
        <h1 className="text-3xl text-gray-800 font-bold mb-4">POSTS LIST:</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <p>{post.title}</p>
              <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const resUser = await fetch("https://jsonplaceholder.typicode.com/users");
  const resPost = await fetch("https://jsonplaceholder.typicode.com/posts");
  const users = await resUser.json();
  const posts = await resPost.json();

  return {
    props: {
      users,
      posts: posts.slice(0, 5),
    },
  };
}

export default Multiple;
