"use client";

import { useEffect, useState } from "react";
import StudyCard, { Study } from "../components/StudyCard";
import StudyHeader from "../components/StudyHeader";
import Link from "next/link";

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

const Recruit = () => {
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
        acc + (i === 0 ? "" : "&") + `${curr}=${searchData[curr]}`
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
    <div className="">
      <div>
        <StudyHeader
          title="스터디 그룹 모집"
          subs="나에게 맞는 스터디 그룹을 찾아보고 참여해보세요!"
        />
        <nav className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-[1440px] h-[104px] overflow-hidden gap-5 px-16 py-[30px] bg-white">
          <div
            id="filterSection"
            className="w-fit h-fit flex justify-center items-center gap-2"
          >
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-5 py-1 rounded-[20px] bg-white border border-[#003324] text-[#003324] text-xl">
              지역
            </div>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-5 py-1 rounded-[20px] bg-white border border-[#003324] text-[#003324] text-xl">
              주제
            </div>
          </div>
          <Link href="/register">
            <div className="w-fit h-fit px-4 py-2 bg-[#003324] text-white text-xl rounded-2xl cursor-pointer">
              스터디 추가
            </div>
          </Link>
        </nav>
        <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[1440px] gap-2.5 p-[60px] bg-white overflow-visible">
          <div className="grid grid-cols-2 flex-grow-0 flex-shrink-0 w-[1320px] h-[1239px] overflow-hidden gap-5">
            {studyList.map((study) => (
              <StudyCard key={study.studyId} study={study} />
            ))}
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[104px] relative gap-2 px-6 py-3 border border-[#003324]/50">
            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#003324]">
              더 보기
            </p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Recruit;
