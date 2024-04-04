"use client";

import { useEffect, useState } from "react";
import StudyCard, { Study } from "../components/StudyCard";
import StudyHeader from "../components/StudyHeader";

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

const DummyMember: Member = {
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

const DummyStudy: Study = {
  studyId: 0,
  member: DummyMember,
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
    new Array(4).fill(DummyStudy)
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
        <nav className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[1440px] h-[104px] overflow-hidden gap-5 px-16 py-[30px] bg-white">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-5 py-1 rounded-[20px] bg-white border border-[#003324]">
            <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-[#003324]">
              지역
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2 px-5 py-1 rounded-[20px] bg-white border border-[#003324]">
            <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-[#003324]">
              주제
            </p>
          </div>
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
