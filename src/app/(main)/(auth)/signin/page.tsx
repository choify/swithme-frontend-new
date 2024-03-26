import {Form} from "@/app/components/form";

const SignInPage = () => {
  return(
    <div className="w-full h-full column items-center justify-center">
      <Form className="border border-neutral-950">
        <div className="column gap-y-4">
          <span className="text-semibold-56px">
            로그인
          </span>
          <span className="text-medium-18px">
            로그인을 해주세요.
          </span>
        </div>
      </Form>
    </div>
  );
};

export default SignInPage;