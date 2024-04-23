"use client";

import { NextPage } from "next";
import TextInput from "../components/TextInput";
import { useRef, useState } from "react";
import { Input } from "@/app/components/input";

const StudyRegister: NextPage = () => {
  const [image, setImage] = useState<string>();

  const onImageChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[290px] w-[1440px] overflow-hidden gap-20 px-16 py-[100px] bg-white">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[145px] w-[768px] relative gap-6">
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[768px] text-[56px] font-bold text-left text-[#003725]">
            스터디 그룹 등록하기
          </p>
          <p className="self-stretch flex-grow-0 flex-shrink-0 w-[768px] text-lg text-left text-[#003725]">
            스터디를 등록해보세요!
          </p>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget as HTMLFormElement);
          console.log(formData.get("title"));
        }}
        className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-10 px-[60px] pb-[60px]"
      >
        <div className="h-fit flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-10">
          <div className=" h-full w-52 flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5">
            스터디 명
          </div>
          <Input
            inputProps={{
              name: "title",
              placeholder: "스터디 명을 입력해 주세요.",
            }}
          />
        </div>
        <div className="h-fit flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-10">
          <div className=" h-full w-52 flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5">
            인원수
          </div>
          <Input
            inputProps={{
              name: "numberOfMember",
              placeholder: "스터디 인원 수를 입력해 주세요.",
            }}
          />
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[60px] overflow-hidden gap-10">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-52 relative overflow-hidden gap-2.5 px-5">
            <p className="self-stretch flex-grow w-[168px] h-[60px] text-lg text-left text-black">
              타입
            </p>
          </div>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[195px] relative overflow-hidden gap-2.5 px-5 rounded">
            <input
              type="radio"
              name="studyType"
              id="typeOnline"
              value="ONLINE"
            />
            <label
              htmlFor="typeOnline"
              className="w-[125px] h-fit text-lg text-left text-[#111]"
            >
              온라인
            </label>
          </div>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[195px] relative overflow-hidden gap-2.5 px-5 rounded">
            <input
              type="radio"
              name="studyType"
              id="typeOffline"
              value="OFFLINE"
            />
            <label
              htmlFor="typeOffline"
              className="w-[125px] h-fit text-lg text-left text-[#111]"
            >
              오프라인
            </label>
          </div>
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[60px] overflow-hidden gap-10">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-52 relative overflow-hidden gap-2.5 px-5">
            <p className="self-stretch flex-grow w-[168px] h-[60px] text-lg text-left text-black">
              위치
            </p>
          </div>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[195px] relative overflow-hidden gap-2.5 px-5 rounded border border-black">
            <select id="gu" name="gu" defaultValue="">
              <option value="">구 선택</option>
              <option value="동대문구">동대문구</option>
              <option value="동대문구">동대문구</option>
              <option value="동대문구">동대문구</option>
              <option value="동대문구">동대문구</option>
            </select>
          </div>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[195px] relative overflow-hidden gap-2.5 px-5 rounded border border-black">
            <select id="dong" name="dong" defaultValue="">
              <option value="">동 선택</option>
              <option value="동대문구">동대문구</option>
              <option value="동대문구">동대문구</option>
              <option value="동대문구">동대문구</option>
              <option value="동대문구">동대문구</option>
            </select>
          </div>
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[60px] overflow-hidden gap-10">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 w-52 relative overflow-hidden gap-2.5 px-5">
            <p className="self-stretch flex-grow w-[168px] h-[60px] text-lg text-left text-black">
              카테고리
            </p>
          </div>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[195px] relative overflow-hidden gap-2.5 px-5 rounded border border-black">
            <select id="category" name="category" defaultValue="">
              <option value="">대분류 선택</option>
              <option value="동대문구">동대문구</option>
              <option value="동대문구">동대문구</option>
              <option value="동대문구">동대문구</option>
              <option value="동대문구">동대문구</option>
            </select>
          </div>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[195px] relative overflow-hidden gap-2.5 px-5 rounded border border-black">
            <select id="category_detail" name="category_detail" defaultValue="">
              <option value="">소분류 선택</option>
              <option value="동대문구">동대문구</option>
              <option value="동대문구">동대문구</option>
              <option value="동대문구">동대문구</option>
              <option value="동대문구">동대문구</option>
            </select>
          </div>
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-10">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-52 h-[60px] relative overflow-hidden gap-2.5 px-5">
            <p className="self-stretch flex-grow w-[168px] h-[60px] text-lg text-left text-black">
              이미지 등록
            </p>
          </div>
          <input
            type="file"
            name="studyThumbnail"
            id="studyThumbnail"
            onChange={onImageChange}
          />
          <div className="w-[450px] h-60">
            <img
              src={image}
              className="flex justify-center items-center flex-grow-0 flex-shrink-0  relative overflow-hidden gap-2.5 p-5 rounded bg-neutral-100 border border-black"
            />
          </div>
        </div>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-10">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-52 h-[60px] relative overflow-hidden gap-2.5 px-5">
            <p className="self-stretch flex-grow w-[168px] h-[60px] text-lg text-left text-black">
              스터디 설명
            </p>
          </div>
          <Input
            textareaProps={{
              id: "studyInfo",
              name: "studyInfo",
              placeholder: "스터디 설명을 입력해주세요.",
            }}
          />
        </div>
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[60px] overflow-hidden gap-10">
          <button
            type="submit"
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[180px] h-[50px] relative gap-2 px-6 py-3 bg-[#027a48] border border-[#027a48]"
          >
            <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-white">
              등록하기
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudyRegister;
