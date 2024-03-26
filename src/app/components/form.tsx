import { DetailedHTMLProps, FormHTMLAttributes } from "react";

export const Form = (
  props: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
) => {
  return (
    <form {...props} className={`column ${props.className}`}>
      {props.children}
    </form>
  );
};
