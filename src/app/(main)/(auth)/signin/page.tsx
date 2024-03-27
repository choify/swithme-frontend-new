"use client";

import {Form} from "@/app/components/form";
import {Input} from "@/app/components/input";
import {Button} from "@/app/components/button";
import Link from "next/link";

const SignInPage = () => {
  const onSubmit = () => {
    alert("개발 중");
  }

  return (
    <div className="w-full flex items-center justify-center">
      <Form onSubmit={onSubmit}>
        <div className="column w-[612px] gap-5">
          <h1 className="text-semibold-32px text-lime-900">
            로그인
          </h1>
          <Input
            label={"아이디(이메일)"}
            variant={"signin"}
            inputProps={{
              placeholder: "아이디(이메일)를 입력해주세요",
            }}
          />
          <Input
            label={"패스워드"}
            variant={"signin"}
            inputProps={{
              placeholder: "패스워드를 입력해주세요",
            }}
          />
          <Button>
            로그인
          </Button>


          <div className="column items-center justify-center gap-5">
            <Link
              href={"/password"}
              className="text-semibold-16px text-lime-900"
            >
              비밀번호 찾기
            </Link>

            <Link
              href={"/signup"}
              className="text-semibold-16px text-lime-900"
            >
              회원가입 하러가기
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SignInPage;