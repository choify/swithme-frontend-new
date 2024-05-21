import Link from "next/link";
import { Member } from "../recruit/page";
import Badge from "./Badge";
import {useRouter} from "next/navigation";

export interface Study {
  studyId: number;
  member: Member;
  title: string;
  studyType: "ONLINE" | "OFFLINE";
  numberOfMember: number;
  regionCode?: number;
  studyInfo: string;
  studyStatus: "CURR" | "COMP" | "END";
  dateStudyStart?: number;
  dateStudyEnd?: number;
  dateCreated: number;
  lastModifiedDate: number;
}

const StudyCard = ({ study }: { study: Study }) => {
  const router = useRouter();

  return (
    <div
      className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 h-[587px] w-[640px] gap-2.5 p-5 rounded-[13px] bg-white shadow-lg cursor-pointer"
      onClick={() => router.push(`/groups/${study.studyId}`)}
    >
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-5 p-5">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
          <p className=" w-[560px] text-2xl font-bold text-left text-[#003725] ">
            {study.title}
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[560px] text-base text-left text-[#003725] truncate">
            {study.studyInfo}
          </p>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1669324357471-e33e71e3f3d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="self-stretch flex-grow-0 flex-shrink-0 h-[356px] object-cover"
        />
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 pt-4">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5">
            <Badge text="강남구 서초동" />
            <Badge text="개발 - 프론트엔드" />
            <Badge text="40 / 50명" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyCard;
