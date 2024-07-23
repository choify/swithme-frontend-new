import React from 'react'

const StudyHeader = (props:{
  studyStatus: string;
  title: string;
  studyType: string;
  remainingNumber: number;
  numberOfMembers: number;
}) => {
  return (
    <div className="flex items-center justify-between py-2 border-b-neutral-400 border-b-2 gap-x-5 mt-20">
      <div className="flex items-center gap-x-2">
        <div
          className="px-2 py-0.5 text-medium-24px border-2 border-neutral-400 text-neutral-500 rounded-md">
          {props.studyStatus === "CURR" ? "모집중" : "진행중"}
        </div>
        <h3 className="text-semibold-36px text-neutral-800">
          {props.title}
        </h3>
      </div>
      <div className="flex items-center gap-x-2">
        <div
          className="px-2 py-0.5 text-medium-24px border-2 border-neutral-400 text-neutral-500 rounded-md">
          {props.studyType === "OFFLINE" ? "오프라인" : "온라인"}
        </div>
        <div
          className="px-2 py-0.5 text-medium-24px border-2 border-neutral-400 text-neutral-500 rounded-md">
          서울, 강서
        </div>
        <div
          className="px-2 py-0.5 text-medium-24px border-2 border-neutral-400 text-neutral-500 rounded-md">
          {`${props.remainingNumber} | ${props.numberOfMembers} 명`}
        </div>
      </div>
    </div>
  )
}
export default StudyHeader
