import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface variants {
  [keyname: string]: string;
}

const variants: variants = {
  default: "button",
  primary: "button is-primary",
  white: "button is-white is-outlined"
};

interface Props{
  text?: string;
  icon?: IconProp;
  variant?: string;
}

type Button = Props & React.HTMLProps<HTMLButtonElement> & React.HTMLAttributes<HTMLButtonElement>;

function Button({
  text = "",
  icon,
  children,
  className = "",
  variant = "default",
  onClick = () => {},
  ...rest
}: Button) {
  return (
    <button
      className={`${variants[variant]} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {icon && (
        <span className="icon is-small">
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      {children}
      {text && <span>{text}</span>}
    </button>
  );
}

export default Button;
