import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

function Header() {
  const { user } = useUser();

  return (
    <header className="p-1 bg-teal-500 text-white font-sans">
      <div className="m-3 flex items-center">
        <div className="">
          <Link href="/">
            <a className="text-xl ml-6">Home</a>
          </Link>
        </div>
        <h1 className="text-3xl flex-1 text-center">Sweet Niblets</h1>
        {user ? (
          <div className="border-2 rounded-md hover:bg-white hover:text-teal-500">
            <a
              className="text-xl ml-3 mr-3"
              href="/api/auth/logout"
              data-testid="logout"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="border-2 rounded-md hover:bg-white hover:text-teal-500">
            <a
              className="text-xl ml-3 mr-3"
              href="/api/auth/login"
              data-testid="login"
            >
              Login
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
