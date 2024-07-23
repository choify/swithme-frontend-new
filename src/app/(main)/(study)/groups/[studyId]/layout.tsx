import React, {ReactNode} from "react";
import StudyNav from "@/app/(main)/(study)/groups/[studyId]/components/study-nav";

export default function StudyDetailLayout({children}: { children: ReactNode }) {
  return (
    <div className="column w-full items-center">
      <div className="w-1/2">
        <StudyNav
          detailsLink={"./details"}
          challengeLink={"./challenge"}
          membershipLink={"./member"}
        />
        {children}
      </div>
    </div>
  );
};