"use client";

import {Form} from "@/app/components/form";
import {Input} from "@/app/components/input";
import {Button} from "@/app/components/button";
import Link from "next/link";
import {object, string, number, date, InferType, mixed, ref} from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from "dayjs";
import {useCallback} from "react";
import {useForm} from "react-hook-form";
import {Selector} from "@/app/components/selector";

const userSchema = object({
  email: string().email("이메일 형식에 맞게 입력해주세요.").required("이메일을 입력해주세요."),
  gender: string().oneOf(['F', 'M', '']).defined().required("성별을 선택해주세요."),
  introduce: string().required("자기소개를 입력해주세요."),
  name: string().required("이름을 입력해주세요."),
  nickname: string().required("닉네임을 입력해주세요."),
  password: string().required("비밀번호를 입력해주세요."),
  passwordConfirm: string().oneOf([ref('password')], "비밀번호가 일치하지 않습니다.").required("비밀번호를 다시 입력해주세요."),
  phone: string().required("전화번호를 입력해주세요."),
});

interface Form extends InferType<typeof userSchema> {
  email: string;
  gender: "F" | "M" | "";
  introduce: string;
  name: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
  phone: string;
}

const defaultValues: Form = {
  email: "",
  gender: "",
  introduce: "",
  name: "",
  nickname: "",
  password: "",
  passwordConfirm: "",
  phone: "",
}

const SignUpPage = () => {
  const form = useForm<Form>({
    defaultValues,
    resolver: yupResolver(userSchema),
  });

  const onSubmit = useCallback(async (data: Form) => {
    try {
      alert("회원가입 완료");
    }catch (error) {

    }
  }, []);

  return (
    <div className="w-full flex items-center justify-center flex-nowrap my-10">
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="column w-[612px] gap-2.5">
          <h1 className="text-semibold-32px text-lime-900">
            회원가입
          </h1>

          <Input
            label={"아이디(이메일)"}
            variant={"signin"}
            inputProps={{
              placeholder: "아이디(이메일)를 입력해주세요",
              ...form.register("email"),
            }}
            error={form.formState.errors.email?.message}
          />

          <Input
            label={"비밀번호"}
            variant={"signin"}
            inputProps={{
              placeholder: "비밀번호를 입력해주세요",
              ...form.register("password"),
              onKeyUp: (e) => {
                if (e.getModifierState("CapsLock")) {
                  form.setError("password", {
                    message: "Caps Lock 키가 활성화 상태입니다.",
                  });
                } else {
                  form.clearErrors();
                }
              },
              type: "password",
            }}
            error={form.formState.errors.password?.message}
          />

          <Input
            label={"비밀번호 확인"}
            variant={"signin"}
            inputProps={{
              placeholder: "비밀번호를 다시 입력해주세요",
              ...form.register("passwordConfirm"),
              type: "password",
            }}
            error={form.formState.errors.passwordConfirm?.message}
          />

          <Input
            label={"이름"}
            variant={"signin"}
            inputProps={{
              placeholder: "이름를 입력해주세요",
              ...form.register("name"),
            }}
            error={form.formState.errors.name?.message}
          />

          <Input
            label={"닉네임"}
            variant={"signin"}
            inputProps={{
              placeholder: "닉네임를 입력해주세요",
              ...form.register("nickname"),
            }}
            error={form.formState.errors.nickname?.message}
          />

          <Selector
            label={"성별"}
            options={[{label: "남성", value: "M"}, {label: "여성", value: "F"}]}
            selectProps={{
              "aria-placeholder": "성별을 선택해주세요",
              ...form.register("gender"),
            }}
            selectClassName={form.watch("gender") === "" ? "text-neutral-500" : ""}
            error={form.formState.errors.gender?.message}
          />

          <Input
            label={"전화번호"}
            variant={"signin"}
            inputProps={{
              placeholder: "전화번호를 입력해주세요",
              ...form.register("phone"),
            }}
            error={form.formState.errors.phone?.message}
          />

          <Input
            label={"자기소개"}
            variant={"signin"}
            textareaProps={{
              placeholder: "자기소개를를 입력해주세요",
              ...form.register("introduce"),
            }}
            error={form.formState.errors.introduce?.message}
          />

          <Button
            className="mt-5"
          >
            회원가입 하기
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpPage;