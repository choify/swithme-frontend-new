"use client";

import logo from "/public/images/header-logo.png";
import search from "/public/images/search.png";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {Button} from "@/app/components/button";
import Link from "next/link";

const nav = [
  {
    name: "스터디 모집",
    path: "/recruit",
  },
  // {
  //   name: "스터디 현황",
  //   path: "/",
  // },
  // {
  //   name: "내 스터디",
  //   path: "/",
  // },
];

export const Header = () => {
  const router = useRouter();

  return (
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
          {nav.map((e, i)=>(
            <div
              onClick={()=>{
                router.push(e.path);
              }}
              key={i}
              className="cursor-pointer text-normal-16px hover:text-medium-16px"
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
            height={24} />
          <Link href={"/signin"}>
            <Button
              type="button"
              variation="border"
            >
              로그인 / 가입
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};