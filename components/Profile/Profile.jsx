import React from "react";
import { useUser } from "@auth0/nextjs-auth0";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className="flex flex-row ml-4">
        <img
          className="mr-3 ml-3 w-11 h-11 rounded-full"
          src={user.picture}
          alt={user.name}
        />
        <h2 className="self-center"> Welcome {user.name}!</h2>
      </div>
    )
  );
}
