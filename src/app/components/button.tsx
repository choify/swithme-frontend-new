import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
export type ButtonVariation =
  | "secondary"
  | "tertiary"
  | "error"
  | "border";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variation?: ButtonVariation;
};

export const Button = (props: ButtonProps) => {
  let theme = "";

  switch (props.variation) {
    case "border":
      theme = "bg-white border border-black text-primary hover:bg-neutral-200"
      break;
    default:
      theme += "bg-primary text-neutral-100";
      break;
  }

  return (
    <button
      className={`
      ${theme}
      h-[38px] w-[118px] rounded-sm text-medium-14px 
      relative flex items-center justify-center
      disabled:bg-neutral-95 disabled:text-neutral-70
      `}
    >
      {props.children}
    </button>
  );
};