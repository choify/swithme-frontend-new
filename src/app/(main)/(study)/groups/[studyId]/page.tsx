import { GetServerSideProps, NextPage } from "next";
import { Member } from "../page";
import { Study } from "../../components/StudyCard";

interface Props {
  studyData: Study;
}

const getServersideProps: () => Promise<Study> = async () => {
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

  const studyData: Study = {
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

  return studyData;
};

const GroupsDetail: NextPage<Props> = async () => {
  const studyData = await getServersideProps();
  return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 bg-white">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[1440px] overflow-hidden gap-5 px-16 pt-[60px] pb-[30px] bg-white">
        <div className="flex flex-col justify-start items-start flex-grow gap-6">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-6">
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1203px] text-[56px] font-bold text-left text-black">
                {studyData?.title}
              </p>
              <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1203px] text-lg text-left text-black">
                {studyData?.studyInfo}
              </p>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5">
              <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-2.5 py-[5px] rounded-[10px] border border-[#027a48]">
                <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-center text-black">
                  강남구 서초동
                </p>
              </div>
              <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2.5 py-[5px] rounded-[10px] border border-[#027a48]">
                <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-center text-black">
                  개발 - 프론트엔드
                </p>
              </div>
              <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2.5 py-[5px] rounded-[10px] border border-[#027a48]">
                <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-center text-black">
                  40 / 50명
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[11px] py-[19px] rounded-sm bg-[#027a48]">
          <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-center text-white">
            참여하기
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[717px] overflow-hidden px-[30px]">
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 pr-[30px] py-[5px] border-t-2 border-r-0 border-b-0 border-l-0 border-[#027a48]">
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[200px] relative overflow-hidden gap-2.5 p-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#027a48]">
                지역
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5">
              <p className="flex-grow w-[407px] text-base font-semibold text-left text-black">
                성동구
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 pr-[30px] py-[5px] border-t-2 border-r-0 border-b-0 border-l-0 border-[#027a48]">
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[200px] relative overflow-hidden gap-2.5 p-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#027a48]">
                스터디 시간
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5">
              <p className="flex-grow w-[407px] text-base font-semibold text-left text-black">
                매주 화요일 오후 7시
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 pr-[30px] py-[5px] border-t-2 border-r-0 border-b-0 border-l-0 border-[#027a48]">
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[200px] relative overflow-hidden gap-2.5 p-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#027a48]">
                참여 인원 수
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5">
              <p className="flex-grow w-[407px] text-base font-semibold text-left text-black">
                4~5명
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 pr-[30px] py-[5px] border-2 border-[#027a48]">
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-[200px] relative overflow-hidden gap-2.5 p-2.5">
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#027a48]">
                목표
              </p>
            </div>
            <div className="flex justify-start items-center self-stretch flex-grow relative overflow-hidden gap-2.5 p-2.5">
              <p className="flex-grow w-[407px] text-base font-semibold text-left text-black">
                취업합시다!
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5">
          <div className="flex flex-col justify-start items-start flex-grow relative overflow-hidden gap-20 px-16 py-28 bg-white">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-6">
              <p className="flex-grow-0 flex-shrink-0 w-[616px] text-5xl font-bold text-left text-black">
                Study Group Details
              </p>
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0">
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pb-4">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1272px] text-base text-left text-black">
                    Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.
                    Tellus id scelerisque est ultricies ultricies. Duis est sit
                    sed leo nisl, blandit elit sagittis. Quisque tristique
                    consequat quam sed. Nisl at scelerisque amet nulla purus
                    habitasse.
                  </p>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pb-4">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1272px] text-base text-left text-black">
                    Nunc sed faucibus bibendum feugiat sed interdum. Ipsum
                    egestas condimentum mi massa. In tincidunt pharetra
                    consectetur sed duis facilisis metus. Etiam egestas in nec
                    sed et. Quis lobortis at sit dictum eget nibh tortor commodo
                    cursus.
                  </p>
                </div>
                <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative">
                  <p className="self-stretch flex-grow-0 flex-shrink-0 w-[1272px] text-base text-left text-black">
                    Odio felis sagittis, morbi feugiat tortor vitae feugiat
                    fusce aliquet. Nam elementum urna nisi aliquet erat dolor
                    enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut
                    id eget consectetur dictum. Donec posuere pharetra odio
                    consequat scelerisque et, nunc tortor. Nulla adipiscing erat
                    a erat. Condimentum lorem posuere gravida enim posuere
                    cursus diam.
                  </p>
                </div>
              </div>
            </div>
            <img
              src="https://cdn.pixabay.com/photo/2015/07/19/10/00/school-work-851328_1280.jpg"
              className="self-stretch flex-grow-0 flex-shrink-0 h-[738px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupsDetail;
