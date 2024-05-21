"use client";

import {Form} from "@/app/components/form";
import {Input} from "@/app/components/input";
import {Button} from "@/app/components/button";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {object, ref, string} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

interface Form {
  email: string;
  password: string;
}
const defaultValues: Form = {
  email: "",
  password: "",
}

const userSchema = object({
  email: string().email("이메일 형식에 맞게 입력해주세요.").required("이메일을 입력해주세요."),
  password: string().required("비밀번호를 입력해주세요."),
});

const SignInPage = () => {
  const form = useForm<Form>({
    defaultValues,
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data: Form) => {
    if (data.email === "" || data.email === null) {
      alert("이메일을 입력해 주세요.");
      return;
    }

    if (data.password === "" || data.password === null) {
      alert("비밀번호를 입력해 주세요.");
      return;
    }

    window.location.replace("/");
  }

  return (
    <div className="w-full flex items-center justify-center">
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="column w-[612px] gap-5">
          <h1 className="text-semibold-32px text-lime-900">
            로그인
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
            label={"패스워드"}
            variant={"signin"}
            inputProps={{
              placeholder: "패스워드를 입력해주세요",
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