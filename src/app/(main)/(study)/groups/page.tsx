"use client";

import {useEffect, useState} from "react";
import StudyCard, {Study} from "../components/StudyCard";
import StudyHeader from "../components/StudyHeader";
import Link from "next/link";
import {useRouter, useSearchParams} from "next/navigation";
import {Button} from "@/app/components/button";

export interface Member {
  id: number;
  email: string;
  password: string;
  name: string;
  nickname: string;
  login_type?: "NORMAL" | "GOOGLE" | "KAKAO" | "NAVER";
  oauth_id?: string;
  gender: "M" | "F";
  birthdate: Date;
  phone: string;
  introduce: string;
  date_withdraw: number;
  withdraw: number;
  temperature: number;
  date_created: number;
  last_modified_date: number;
  authority: "ROLE_USER" | "ROLE_ADMIN" | "ROLE_MASTER";
}

export interface Category {
  categoryId: number;
  parentId: number;
  parent?: string;
  child?: string;
}

const dummyMember: Member = {
  id: 0,
  email: "",
  password: "",
  name: "",
  nickname: "",
  gender: "M",
  birthdate: new Date(),
  phone: "",
  introduce: "",
  date_withdraw: 0,
  withdraw: 0,
  temperature: 0,
  date_created: 0,
  last_modified_date: 0,
  authority: "ROLE_USER",
};

const dummyStudy: Study = {
  studyId: 0,
  member: dummyMember,
  title: "스터디 이름",
  studyType: "ONLINE",
  numberOfMember: 0,
  studyInfo:
    "스터디 설명은 트룬케이트를 써서 쩜쩜쩜으로 끝나도로고 하는 것이 한 줄로 해서 보는 게 제일 좋아 보입니다. 아무래도 그렇지 않을까요?",
  studyStatus: "CURR",
  dateCreated: 0,
  lastModifiedDate: 0,
};

interface StudyRequest {
  category?: string;
  detailCategory?: string;
  dong?: string;
  gu?: string;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged?: boolean;
  title?: string;
  unpaged?: boolean;
}

const Groups = () => {
  const router = useRouter();
  const param = useSearchParams();
  const type = param.get("type");

  const [studyList, setStudyList] = useState<Study[]>(
    new Array(4).fill(dummyStudy)
  );

  const getStudyList = async () => {
    const searchData: StudyRequest = {
      offset: 0,
      pageNumber: 0,
      pageSize: 0,
    };

    const query = Object.keys(searchData).reduce(
      (acc, curr, i) =>
        acc + (i === 0 ? "" : "&") + `${curr}=${Object.values(curr)}`
    );
    console.log(query);

    const newPage = await (
      await fetch(
        `${process.env.NEXT_PUBLIC_AWS_SERVER_URL}/api/v1/study?${query}`,
        {
          method: "GET",
        }
      )
    ).json();

    console.log(newPage);
  };

  useEffect(() => {
    // getStudyList();
  }, []);

  return (
    <div className={"w-full column"}>
      <div className="w-full flex items-center justify-between mt-10">
        <h1 className="text-semibold-36px text-lime-900">
          {type == "ONLINE" ? "온라인" : type === "OFFLINE" ? "오프라인" : "전체"} 스터디그룹
        </h1>

        <Button
          variation="secondary"
          className="w-[180px] text-medium-16px bg-lime-500 hover:bg-lime-600"
          onClick={() => {
            router.push("/register");
          }}
        >
          스터디그룹 등록하기
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-y-5 justify-items-center mt-10">
        {studyList.map((study) => (
          <StudyCard key={study.studyId} study={study}/>
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
  );
};

export default Groups;
