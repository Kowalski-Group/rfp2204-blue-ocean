import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";

function Header() {
  const { user } = useUser();

  return (
    // <header className="p-1 bg-teal-500 text-white font-sans">
    //   <div className="m-3 flex items-center">
    //     <div className="">
    //       <Link href="/">
    //         <a className="text-xl ml-6">Home</a>
    //       </Link>
    //     </div>
    //     <h1 className="text-3xl flex-1 text-center">Sweet Niblets</h1>
    //     {user ? (
    //       <div className="border-2 rounded-md hover:bg-white hover:text-teal-500">
    //         <a
    //           className="text-xl ml-3 mr-3"
    //           href="/api/auth/logout"
    //           data-testid="logout"
    //         >
    //           Logout
    //         </a>
    //       </div>
    //     ) : (
    //       <div className="border-2 rounded-md hover:bg-white hover:text-teal-500">
    //         <a
    //           className="text-xl ml-3 mr-3"
    //           href="/api/auth/login"
    //           data-testid="login"
    //         >
    //           Login
    //         </a>
    //       </div>
    //     )}
    <header className="bg-indigo-700 text-white py-6 px-4 grid grid-flow-col auto-cols-max gap-2">
      <div className="h-20 w-20 relative ">
        <Image
          src="/../public/mic1.png"
          alt="logo"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="col-span-3">
        <h1 className="text-4xl font-Audiowide"> Sweet Niblets</h1>

        <p>Let&apos;s sing together</p>
      </div>
    </header>
  );
}

export default Header;
