import {Button} from "@/app/components/button";
import Link from "next/link";

export const NavBanner = (props:{
  name?: string;
  title: string;
  description: string;
  url: string;
}) => {
  return(
    <div className="column gap-6">
      <div className="column gap-y-4">
        {props.name && (
          <span className="text-semibold-16px">
            {props.name}
          </span>
        )}
        <span className="text-semibold-56px">
          {props.title}
        </span>
      </div>

      <div className="text-medium-18px">
        {props.description}
      </div>
      <Link href={"/"}>
        <Button
          variation="border"
          type={"button"}
        >
          바로가기
        </Button>
      </Link>
    </div>
  );
};