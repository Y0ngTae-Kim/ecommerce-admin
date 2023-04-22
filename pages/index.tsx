import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  if (!session)
    return (
      <div className="bg-blue-900 v-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  return (
    <div className="bg-blue-900 v-screen h-screen flex items-center">
      <div className="w-full">
        <div className="bg-white">
          <p>
            logged in
            <pre>{JSON.stringify(session.user, null, 2)}</pre>
          </p>
        </div>
        <div className="text-center ">
          <button
            onClick={() => signOut()}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
