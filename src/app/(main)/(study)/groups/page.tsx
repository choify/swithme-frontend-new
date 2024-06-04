"use client";

import {useRouter} from "next/navigation";
import Card from "@/app/components/card";
import Plus from "/public/images/plus.png";
import Image from "next/image";
import {useCallback, useEffect, useState} from "react";
import dayjs from "dayjs";

export type Group = {
  studyId: number;
  studyStatus: string;
  title: string;
  studyInfo: string;
  studyType: string;
  numberOfMembers: number;
  remainingNumber: number;
  dateStudyStart: string;
  dateStudyEnd: string;
  createdMember: {
    nickname: string;
  };
};

const Groups = () => {
  const router = useRouter();
  const [groups, setGroups] = useState<Group[]>([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('http://3.37.237.39:8080/api/v1/study', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setGroups(data.content);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (e) {
      console.error('Failed to fetch groups:', e);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(groups);

  return (
    <div className={"w-full column"}>
      <div className="w-full flex items-center justify-between mt-10">
        <h1 className="text-semibold-36px text-neutral-600">
          <span className="text-lime-800">{"전체"}</span> 스터디
        </h1>

        <button
          className="flex items-center px-5 py-2.5 border border-lime-500 rounded-md text-semibold-16px text-neutral-600 bg-lime-200 hover:bg-lime-300"
          type={"button"}
          onClick={() => {
            router.push("/groups/register");
          }}
        >
          스터디 만들기
          <Image src={Plus} alt={"plus"} width={24} height={24}/>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-5 justify-items-center mt-10">
        {groups.length ? groups.map((e, i) => (
          <Card
            key={i}
            studyId={e.studyId}
            title={e.title}
            studyStatus={e.studyStatus}
            studyInfo={e.studyInfo}
            studyType={e.studyType}
            numberOfMembers={e.numberOfMembers}
            remainingNumber={e.remainingNumber}
            dateStudyStart={dayjs(e.dateStudyStart).format("YYYY.MM.DD")}
            dateStudyEnd={dayjs(e.dateStudyEnd).format("YYYY.MM.DD")}
            nickname={e.createdMember.nickname}
          />
        )) : (
          <div className="col-span-2 h-[240px] w-full flex items-center justify-center">
            <h1 className="text-semibold-24px text-neutral-500">
              스터디가 없습니다.
            </h1>
          </div>
        )}
      </div>

      <div className="w-full flex items-center justify-center mt-10">
        {/*<Button*/}
        {/*  variation="border"*/}
        {/*>*/}
        {/*  더보기*/}
        {/*</Button>*/}
      </div>
    </div>
  );
};

export default Groups;
