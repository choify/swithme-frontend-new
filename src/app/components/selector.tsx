import {DetailedHTMLProps, ReactNode, SelectHTMLAttributes} from "react";
import {InputError} from "@/app/components/input";

export type SelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export const Selector = (props: {
  variant?: "signin";
  label?: ReactNode;
  className?: string;
  error?: string;
  selectProps?: SelectProps;
  selectClassName?: string;
  options: {
    label: string;
    value: string;
    hidden?: boolean | undefined | null;
    disabled?: boolean | undefined | null;
    selected?: boolean | undefined | null;
  }[];
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
      w-full flex items-center border ${borderColor} ${rounded}
      focus-within:border-[2px] focus-within:${borderColor}
      ${props.error ? "border-red-700" : ""}
      `}>
        <select
          className={`w-full hide-number-buttons p-4
            ${font} ${rounded} ${placeholder} ${focus} ${
            props.selectClassName || ""
          }`}
          {...props.selectProps}
        >
          {props.selectProps?.["aria-placeholder"] && (
            <option selected disabled value={""}>
              {props.selectProps?.["aria-placeholder"]}
            </option>
          )}
          {props.options.map((x, i) => {
            return (
              <option
                disabled={x.disabled || false}
                value={x.value}
                key={x.value}
                selected={x.selected || false}
                hidden={x.hidden || false}
                className={x.disabled ? "text-neutral-50" : "text-neutral-0"}
              >
                {x.label}
              </option>
            );
          })}
        </select>
      </div>
      {props.error && <InputError>{props.error}</InputError>}
    </div>
  );
};