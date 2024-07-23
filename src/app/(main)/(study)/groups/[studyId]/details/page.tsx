"use client";

import React, {useCallback, useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import dayjs from "dayjs";
import {Group} from "@/app/(main)/(study)/groups/page";
import StudyHeader from "@/app/(main)/(study)/groups/[studyId]/components/study-header";
import StudyButton from "@/app/(main)/(study)/groups/[studyId]/components/study-button";

const GroupsDetail = () => {
  const [group, setGroup] = useState<Group | null>(null);
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const groupIdIndex = pathSegments.indexOf('groups') + 1;
  const id = pathSegments[groupIdIndex];
  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/study/${id}`);
        if (response.ok) {
          const data = await response.json();
          setGroup(data.data);
        } else {
          throw new Error('Failed to fetch the group data');
        }
      } catch (error) {
        console.error('Error fetching group:', error);
      }
    };

    fetchGroup();
  }, [id]);

  const studyJoin = useCallback(async () => {
    const token = localStorage.getItem('accessToken');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/study/join/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "스터디 참여 신청에 실패하였습니다.");
      }

      alert("스터디 참여 신청이 완료되었습니다.");
    } catch (error) {
      alert(error);
      console.error('Error fetching group:', error);
    }
  }, [id]);

  const addComment = useCallback(async () => {
    const token = localStorage.getItem('accessToken');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/study/comment/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "스터디 참여 신청에 실패하였습니다.");
      }

    } catch (error) {
      console.error('Error fetching group:', error);
    }
  }, []);


  if (!group) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <StudyHeader
        studyStatus={group.studyStatus}
        title={group.title}
        studyType={group.studyType}
        remainingNumber={group.remainingNumber}
        numberOfMembers={group.numberOfMembers}
      />

      <div className="flex items-center justify-end w-full mt-5">
        <StudyButton onClick={studyJoin}>
          스터디 참여하기
        </StudyButton>
      </div>

      <div className="grid grid-cols-5 gap-y-5 my-10 text-medium-18px">
        <div className="py-5">
          스터디장
        </div>
        <div className="col-span-4 flex items-center">
          {group.createdMember.nickname}
        </div>
        <div className="py-5">
          스터디 기간
        </div>
        <div className="col-span-4 flex items-center">
          {`${dayjs(group.dateStudyStart).format("YYYY.MM.DD")} - ${dayjs(group.dateStudyEnd).format("YYYY.MM.DD")}`}
        </div>
        <div className="py-5">
          스터디 정보
        </div>
        <div
          className="col-span-4 flex items-center bg-neutral-100 border border-neutral-200 px-8 py-10 rounded-md">
          <p className="text-medium-20px">
            {group.studyInfo}
          </p>
        </div>
      </div>

      <div className="column border-t border-neutral-400 p-5">
        <div className="flex items-center">
          <input
            className="w-full border-b border-b-neutral-300 p-2.5 my-5 focus:outline-none focus:border-b-neutral-800"
            placeholder="댓글 추가하기"
          />
          <button
            className="w-20 py-2.5 bg-lime-400 rounded-2xl text-semibold-16px text-neutral-800 border border-lime-500 hover:bg-green-500">
            댓글
          </button>
        </div>

        <div className="flex gap-x-5">
          <div className="p-2 text-semibold-16px text-neutral-600">
            닉네임
          </div>
          <div className="column">
            <div className="p-5 border border-lime-200 bg-lime-50 rounded-xl">
              이 스터디 정말 좋아요!
            </div>
            <div className="text-medium-12px flex items-end justify-end p-1">
              2024.05.06 05:00:00
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupsDetail;
