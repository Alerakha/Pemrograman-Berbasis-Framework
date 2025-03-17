import { useRouter } from "next/router";

const UserDetail = ({ user }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Memuat mohon tunggu...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {user.name}
          </h1>
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold">Username:</span> {user.username}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Phone:</span> {user.phone}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Website:</span>{" "}
              <a
                href={`http://${user.website}`}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.website}
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Company:</span>{" "}
              {user.company.name}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Catchphrase:</span>{" "}
              {user.company.catchPhrase}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Business:</span> {user.company.bs}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const resUser = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await resUser.json();

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const resUser = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  if (!resUser.ok) {
    return {
      notFound: true,
    };
  }
  const user = await resUser.json();

  return {
    props: {
      user,
    },
    revalidate: 60,
  };
}

export default UserDetail;
