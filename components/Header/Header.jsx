import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="bg-indigo-700 text-white py-6 px-4 grid grid-cols-12 gap-0">
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
        <h1 className="text-4xl  font-Audiowide"> Sweet Niblets</h1>

        <p>Let&apos;s sing together</p>
      </div>
    </header>
  );
}

export default Header;
