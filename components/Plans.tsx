import { CheckIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useAuth from "../hooks/useAuth";

const Plans = () => {
  const { logout } = useAuth();

  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <Image
            src="https://rb.gy/1a9nfy"
            width={100}
            height={28}
            alt="logo"
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      <main className="pt-28">
        <h1 className="mb-3 text-3xl font-medium">
          Choose the plan that&apos;s right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#e50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#e50914]" /> Recommendations
            just for you. your plan anytime.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#e50914]" /> Change or cancel
            your plan anytime.
          </li>
        </ul>

        <div>
          <div>
            <div className="planBox">standard</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Plans;
