"use client";

import { NextPage } from "next";
import {useCallback} from "react";
import { Input } from "@/app/components/input";
import {Form} from "@/app/components/form";
import {InferType, number, object, ref, string} from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Selector} from "@/app/components/selector";
import {Button} from "@/app/components/button";

const userSchema = object({
  categoryId: string().required("카테고리를 선택해주세요."),
  dateStudyEnd: string().required("스터디 종료일을 선택해주세요."),
  dateStudyStart: string().required("스터디 시작일을 선택해주세요."),
  numberOfMembers: number().max(50, "최대 50명 입니다").required("인원수를 입력해주세요."),
  regionCode: string().required("지역을 선택해주세요."),
  studyInfo: string().required("스터디 정보를 입력해주세요."),
  studyType: string().oneOf(['ONLINE', 'OFFLINE', '']).defined().required("스터디 타입을 선택해주세요."),
  title: string().required("스터디명을 입력해주세요."),
});

interface Form extends InferType<typeof userSchema> {
  categoryId: string;
  dateStudyEnd: string;
  dateStudyStart: string;
  numberOfMembers: number;
  regionCode: string;
  studyInfo: string;
  studyType: "ONLINE" | "OFFLINE" | "";
  title: string;
}

const defaultValues: Form = {
  categoryId: "",
  dateStudyEnd: "",
  dateStudyStart: "",
  numberOfMembers: 10,
  regionCode: "",
  studyInfo: "",
  studyType: "",
  title: "",
}

const StudyRegister: NextPage = () => {
  const form = useForm<Form>({
    defaultValues,
    resolver: yupResolver(userSchema),
  });

  const onSubmit = useCallback(async (data: Form) => {

  }, []);

  return (
    <div className="w-full flex justify-center flex-nowrap my-10">
      <Form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"w-1/3"}
      >
        <h1 className="text-semibold-36px text-lime-950">
          스터디 그룹 등록하기
        </h1>
        <div>
          <Input
            label="스터디명"
            variant={"signin"}
            inputProps={{
              placeholder: "스터디명을 입력해주세요",
              ...form.register("title"),
            }}
            error={form.formState.errors.title?.message}
          />

          <Selector
            label={"카테고리"}
            options={[{label: "외국어", value: "1"}, {label: "IT", value: "2"}, {label: "독서", value: "3"}, {label: "자격증", value: "4"}]}
            selectProps={{
              "aria-placeholder": "스터디 타입을 선택해주세요",
              ...form.register("categoryId"),
            }}
            selectClassName={form.watch("categoryId") === "" ? "text-neutral-500" : ""}
            error={form.formState.errors.categoryId?.message}
          />

          <Input
            label="스터디 시작일"
            variant={"signin"}
            inputProps={{
              placeholder: "시작일을 선택해주세요",
              ...form.register("dateStudyStart"),
              type: "date",
            }}
            error={form.formState.errors.dateStudyStart?.message}
          />

          <Input
            label={"스터디 종료일"}
            variant={"signin"}
            inputProps={{
              placeholder: "종료일을 선택해주세요",
              ...form.register("dateStudyEnd"),
              type: "date",
            }}
            error={form.formState.errors.dateStudyEnd?.message}
          />

          <Selector
            label={"스터디 타입"}
            options={[{label: "온라인", value: "ONLINE"}, {label: "오프라인", value: "OFFLINE"}]}
            selectProps={{
              "aria-placeholder": "스터디 타입을 선택해주세요",
              ...form.register("studyType"),
            }}
            selectClassName={form.watch("studyType") === "" ? "text-neutral-500" : ""}
            error={form.formState.errors.studyType?.message}
          />

          <Input
            label={"인원수"}
            variant={"signin"}
            inputProps={{
              placeholder: "인원수를 입력해주세요",
              ...form.register("numberOfMembers"),
              type: "number",
            }}
            error={form.formState.errors.numberOfMembers?.message}
          />

          <Selector
            label={"지역"}
            options={[{label: "강남", value: "1"}, {label: "강북", value: "2"}, {label: "강서", value: "3"}, {label: "강동", value: "4"}]}
            selectProps={{
              "aria-placeholder": "지역을 선택해주세요",
              ...form.register("regionCode"),
            }}
            selectClassName={form.watch("regionCode") === "" ? "text-neutral-500" : ""}
            error={form.formState.errors.regionCode?.message}
          />

          <Input
            label={"스터디 정보"}
            variant={"signin"}
            textareaProps={{
              placeholder: "스터디 정보를 입력해주세요",
              ...form.register("studyInfo"),
            }}
            error={form.formState.errors.studyInfo?.message}
          />

          <div className={"w-full flex items-center justify-center"}>
            <Button
              className="mt-5 w-[160px]"
            >
              스터디 등록
            </Button>
          </div>

        </div>
      </Form>
    </div>
  );
};

export default StudyRegister;
