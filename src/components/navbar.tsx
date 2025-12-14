import React from 'react';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = () => {
  return (
    <section className="flex justify-between bg-white rounded-md shadow-b shadow-lg hover:shadow-2xs items-center px-5">
      <div>
        <h1 className="text-base sm:text-xl md:text-2xl font-medium">
          My-Project
        </h1>
      </div>
      <ul className="flex items-center gap-4">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/projects">
          <li>Projects</li>
        </Link>
        <Link href="/services">
          <li>Services</li>
        </Link>
      </ul>
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#44626d] hover:bg-[#042c3b] text-ceramic-white rounded-md font-medium text-sm sm:text-white h-10 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </header>
    </section>
  );
};

export default Navbar;