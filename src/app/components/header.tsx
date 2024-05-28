"use client";

import logo from "/public/images/header-logo.png";
import search from "/public/images/search.png";
import Image from "next/image";
import {useRouter, useSearchParams} from "next/navigation";
import {Button} from "@/app/components/button";
import Link from "next/link";
import {useAuthStore} from "@/app/store/authStore";
import {Suspense} from 'react';

const nav = [
  {
    name: "전체 스터디",
    type: "ALL",
    path: "/groups?type=ALL",
  },
  {
    name: "온라인 스터디",
    type: "ONLINE",
    path: "/groups?type=ONLINE",
  },
  {
    name: "오프라인 스터디",
    type: "OFFLINE",
    path: "/groups?type=OFFLINE",
  },
  // {
  //   name: "내 스터디",
  //   path: "/",
  // },
];

export const Header = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const logged = useAuthStore((state) => state.logged);
  const setLogged = useAuthStore((state) => state.setLogged);

  const type = searchParams.get('type');

  const onClick = () => {
    if (logged) {
      setLogged(false);
    } else {
      router.push("/signin");
    }
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>

      <div className="w-full px-[64px] py-2.5 border-b border-neutral-900">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-x-5">
            <Image
              onClick={() => {
                router.push("/");
              }}
              src={logo}
              alt={"logo"}
              width={127}
              height={43}
              className="cursor-pointer"
            />
            {nav.map((e, i) => (
              <div
                key={i}
                onClick={() => {
                  router.push(e.path);
                }}
                className={`cursor-pointer ${e.type === type ? "text-semibold-18px" : "text-semibold-16px"} text-lime-800 hover:text-semibold-18px`}
              >
                {e.name}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-x-5">
            <Image
              className="cursor-pointer"
              src={search}
              alt={"search"}
              width={24}
              height={24}/>
            <Button
              type="button"
              variation="border"
              onClick={onClick}
            >
              {logged ? "로그아웃" : "로그인 / 가입"}
            </Button>
          </div>
        </div>
      </div>
    </Suspense>

  );
};