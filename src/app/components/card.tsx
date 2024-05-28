"use client";

import React, {useState} from 'react'
import Image from "next/image";
import StarOn from "/public/images/star-on.png";
import StarOff from "/public/images/star-off.png";
import {useRouter} from "next/navigation";

function Card() {
  const router = useRouter();
  const [star, setStar] = useState(false);

  const onClick = () => {
    router.push("/groups/1");
  }
  return (
    <div className="w-full border border-neutral-300 column p-5 shadow-xl rounded-xl hover:border hover:border-lime-500">
      <div className="flex items-center gap-2.5 relative">
        <div className="flex items-center gap-x-2">
          <div className="px-2 py-0.5 text-medium-12px border-2 border-neutral-400 text-neutral-500 rounded-md">
            분야
          </div>
          <div
            className="text-semibold-20px text-lime-800 mr-2.5 cursor-pointer"
            onClick={onClick}
          >
            스터디 이름
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="px-2 py-0.5 text-medium-12px border-2 border-neutral-400 text-neutral-500 rounded-md">
            오프라인
          </div>
          <div className="px-2 py-0.5 text-medium-12px border-2 border-neutral-400 text-neutral-500 rounded-md">
            서울, 강서
          </div>
          <div className="px-2 py-0.5 text-medium-12px border-2 border-neutral-400 text-neutral-500 rounded-md">
            1 / 50명
          </div>
        </div>
        <div className="absolute right-0">
          <button
            type={"button"}
            onClick={() => setStar(!star)}
          >
            <Image
              alt="More"
              src={star ? StarOn : StarOff}
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      <div
        className="p-5 mt-5 rounded-md bg-neutral-200 cursor-pointer"
        onClick={onClick}
      >
        <span className="text-semibold-14px text-neutral-800">
          자바 스터디 그룹에 오신 것을 환영합니다! 함께 배우고 성장해요.
        </span>
      </div>
      <div className="px-5 py-2.5 flex items-center">
        <span className="text-semibold-14px text-neutral-500">
          기간: 2021.10.01 ~ 2021.12.31
        </span>
      </div>
    </div>
  );
}

export default Card;
