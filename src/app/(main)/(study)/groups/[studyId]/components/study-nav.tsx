import React from 'react'
import Link from "next/link";

const StudyNav = (props: {
  detailsLink: string;
  challengeLink: string;
  membershipLink: string;
}) => {
  return (
    <nav
      className="grid grid-cols-3 py-4 bg-gray-50 border-b-2 border-gray-200 gap-x-4 text-2xl text-gray-700 text-center hover:text-gray-900">
      <Link href={props.detailsLink} className="hover:bg-gray-100 py-2 rounded-md transition duration-300">
        상세 정보
      </Link>
      <Link href={props.challengeLink} className="hover:bg-gray-100 py-2 rounded-md transition duration-300">
        챌린지
      </Link>
      <Link href={props.membershipLink} className="hover:bg-gray-100 py-2 rounded-md transition duration-300">
        참여 스터디원
      </Link>
    </nav>
  )
}
export default StudyNav
