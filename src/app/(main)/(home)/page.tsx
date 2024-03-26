import {NavBanner} from "@/app/(main)/(home)/nav-banner";

const HomePage = () => {
  return(
    <>
      <div className="column mt-10 gap-y-20">
        <NavBanner
          name={"스터디 모집"}
          title={"나에게 맞는 스터디 찾아보기"}
          description={"나에게 맞는 스터디 그룹을 찾아보고 참여해 보세요!"}
          url={"/"}
        />

        <NavBanner
          name={"스터디 현황"}
          title={"진행중인 스터디 알아보기"}
          description={"인기있는 스터디 그룹은 어떤 그룹이 있는지 알아보세요!"}
          url={"/"}
        />
      </div>
    </>
  );
};

export default HomePage;