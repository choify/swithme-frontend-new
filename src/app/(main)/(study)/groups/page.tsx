"use client";

import {useRouter} from "next/navigation";
import {Button} from "@/app/components/button";
import Card from "@/app/components/card";
import Plus from "/public/images/plus.png";
import Image from "next/image";
import { Suspense } from 'react';

const Groups = () => {
  const router = useRouter();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={"w-full column"}>
        <div className="w-full flex items-center justify-between mt-10">
            <h1 className="text-semibold-36px text-neutral-600">
              <span className="text-lime-800">{"전체"}</span> 스터디
            </h1>

          <button
            className="flex items-center px-5 py-2.5 border border-lime-500 rounded-md text-semibold-16px text-neutral-600 bg-lime-200 hover:bg-lime-300"
            type={"button"}
            onClick={() => {
              router.push("/register");
            }}
          >
            스터디 만들기
            <Image src={Plus} alt={"plus"} width={24} height={24} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-5 justify-items-center mt-10">
          {[1,2,3,4].map((e, i) => (
            <Card key={i} />
          ))}
        </div>

        <div className="w-full flex items-center justify-center mt-10">
          <Button
            variation="border"
          >
            더보기
          </Button>
        </div>

      </div>
    </Suspense>
  );
};

export default Groups;
