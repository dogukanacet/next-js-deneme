"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const [providers, setProviders] = useState(null);
  const isUserLoggedIn = true;

  // useEffect(() => {
  //   const setProviders = async () => {
  //     const response = await getProviders();
  //     setProviders(response);
  //   };

  //   setProviders();
  // }, []);

  const getSignInButton = () => {
    return Object.values(providers).map((provider) => (
      <button
        type="button"
        key={provider.name}
        className="black_btn"
        onClick={() => signIn(provider.id)}
      >
        Sign in
      </button>
    ));
  };

  const renderDesktopNav = () => {
    return (
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={"assets/images/logo.svg"}
                className="rounded-full"
                alt="profile"
                width={37}
                height={37}
              />
            </Link>
          </div>
        ) : (
          <>{providers ? getSignInButton() : null}</>
        )}
      </div>
    );
  };
  const renderMobileNav = () => {
    return (
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <Link href="/profile">
            <Image
              src={"assets/images/logo.svg"}
              className="rounded-full"
              alt="profile"
              width={37}
              height={37}
            />
          </Link>
        ) : (
          getSignInButton()
        )}
      </div>
    );
  };

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="assets/images/logo.svg" alt="logo" width={30} height={30} />
        <p className="logo_text">Promptopia</p>
      </Link>
      {renderDesktopNav()}
      {renderMobileNav()}
    </nav>
  );
};

export default Nav;
