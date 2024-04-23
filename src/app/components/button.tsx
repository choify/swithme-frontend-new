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
  let size = "";

  switch (props.variation) {
    case "border":
      theme = "bg-white border border-black text-primary hover:bg-neutral-200"
      size = "h-[38px] w-[118px] rounded-sm text-medium-14px py-2.5";
      break;
    default:
      theme += "bg-lime-800 text-neutral-100";
      size = "text-medium-20px py-4 rounded-md"
      break;
  }

  return (
    <button
      {...props}
      className={`
      ${props.className}
      relative flex items-center justify-center
      ${theme} ${size}
      disabled:bg-neutral-300 disabled:text-neutral-500
      `}
    >
      {props.children}
    </button>
  );
};