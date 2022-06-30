import React from "react";

import { useUser } from "@auth0/nextjs-auth0";
// import Image from "next/image";
import Profile from "../Profile/Profile";

function Header() {
  const { user } = useUser();

  return (
    <header className="fixed z-20 w-full bg-indigo-700 text-white py-4 px-4">
      <div className="flex flex-row justify-between">
        <div className="grid grid-flow-col auto-cols-max gap-2">
          <div className="w-16 relative">
            {/* <Image
              src="/logo-avatar.png"
              alt="logo"
              layout="fill"
              objectFit="contain"
              className="rounded-full col-start-1"
            /> */}
            <p className="flex w-full h-full items-center justify-center text-5xl">
              🎤
            </p>
          </div>
          <div className="col-span-3">
            <h1 className="text-3xl font-Audiowide font-bold tracking-wide uppercase">
              {" "}
              Sweet Niblets
            </h1>

            <p className="text-sm uppercase tracking-widest">
              Let&apos;s sing together
            </p>
          </div>
        </div>
        {user ? (
          <div className="flex flex-row justify-end self-center text-xl float-right min-w-fit">
            <Profile />
            <div className="self-center ml-5">
              <a
                className="bg-indigo-50 text-indigo-900 px-4 py-2 text-lg lowercase rounded-full hover:bg-indigo-200 transition-colors duration-200 ease-out text-left"
                href="/api/auth/logout"
                data-testid="logout"
              >
                Logout
              </a>
            </div>
          </div>
        ) : (
          <div className="float-right top-12 right-10 self-center justify-self-end ml-5">
            <a
              className="bg-indigo-50 text-indigo-900 px-4 py-2 text-lg lowercase rounded-full hover:bg-indigo-200 transition-colors duration-200 ease-out text-left"
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
