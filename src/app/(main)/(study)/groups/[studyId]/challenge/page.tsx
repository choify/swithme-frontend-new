"use client";

import React, {useCallback, useEffect, useState} from 'react'
import StudyButton from "@/app/(main)/(study)/groups/[studyId]/components/study-button";
import {usePathname} from "next/navigation";

const GroupsChallenge = () => {
  const [challenges, setChallenges] = useState([]);

  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const groupIdIndex = pathSegments.indexOf('groups') + 1;
  const id = pathSegments[groupIdIndex];

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/study/challenge/${id}`);
        if (response.ok) {
          const data = await response.json();
          setChallenges(data.data);
        } else {
          throw new Error('Failed to fetch the group data');
        }
      } catch (error) {
        console.error('Error fetching group:', error);
      }
    };

    fetchChallenges();
  }, [id]);

  const addChallenge = useCallback(async () => {
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
      alert("스터디 참여 신청에 실패하였습니다.");
      console.error('Error fetching group:', error);
    }
  }, [id]);

  const joinChallenge = useCallback(async (challengeId: string) => {
    const token = localStorage.getItem('accessToken');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/challenge/join`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          challengeId: +challengeId,
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "스터디 참여 신청에 실패하였습니다.");
      }

      alert("챌린지 참여 신청이 완료되었습니다.");
    } catch (error) {
      alert(error);
      console.error('Error fetching group:', error);
    }
  }, [id]);
  return (
    <div className="w-full flex flex-col gap-y-2">
      <div className="w-full text-center py-5 border-b">
        챌린지 목록
      </div>
      {challenges.length ? challenges.map((e)=> (
        <div
          key={e.challengeId}
          className="w-full flex items-center p-4 bg-white shadow-lg rounded-lg mb-4"
        >
          <div className="w-full flex flex-col">
            <div className="flex items-center gap-x-4 text-xl font-semibold text-gray-800">
              <div>챌린지 명: {e.title}</div>
              <div className={`px-2 py-1 rounded-full text-sm font-medium ${
                e.challengeStatus === '진행중' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
              }`}>
                {e.challengeStatus}
              </div>
            </div>

            <div className="text-lg mt-2">목표: {e.goal}</div>
            <div className="flex items-center gap-x-4 mt-1">
              <div>시작일: <span className="font-medium">{e.startDate}</span></div>
              <div>종료일: <span className="font-medium">{e.endDate}</span></div>
            </div>
          </div>
          <button
            className="w-52 h-12 py-2 border-2 border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition-colors duration-300 ease-in-out"
            type="button"
            onClick={() => joinChallenge(e.challengeId)}
          >
            챌린지 참여하기
          </button>
        </div>

      )) : (
        <div>
          챌린지가 없습니다.
        </div>
      )}
      <StudyButton onClick={addChallenge}>
        챌린지 추가하기
      </StudyButton>
    </div>
  )
}
export default GroupsChallenge
