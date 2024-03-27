import {DetailedHTMLProps, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes} from "react";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type TextareaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export const Input = (props: {
  variant?: "signin";
  textarea?: boolean;
  label?: ReactNode;
  className?: string;
  inputProps?: InputProps;
  textareaProps?: TextareaProps;
}) => {
  const placeholder = "placeholder:text-body-s1 placeholder:text-neutral-400";
  const focus = "focus:outline-none";
  const rounded = "rounded";
  let font = "text-medium-16px";
  let borderColor = "border-lime-900";

  switch (props.variant) {
    case "signin":
      borderColor = "border-lime-900";
      break;
    default:
      borderColor = "border-neutral-800";
      break;
  }

  return (
    <div className={"w-full column flex-col" + props.className || ""}>
      <div className="text-medium-12px py-2.5">
        {props.label}
      </div>
      <div className={`
      w-full flex items-center border ${borderColor}
      ${props.textareaProps ? "min-h-[160px]" : ""} ${rounded}
      focus-within:border-[2px] focus-within:${borderColor}
      `}>
        {props.textarea && (
          <textarea
            className={`w-full self-stretch p-4 whitespace-pre-wrap resize-none
            ${font} ${rounded} ${placeholder} ${focus} ${
              props.textareaProps?.className || ""
            }`}
            {...props.textareaProps}
          />
        )}

        {!props.textarea && (
          <input
            {...props.inputProps}
            className={`w-full hide-number-buttons p-4
            ${font} ${rounded} ${placeholder} ${focus} ${
              props.inputProps?.className || ""
            }`}
          />
        )}
      </div>
    </div>
  );
};