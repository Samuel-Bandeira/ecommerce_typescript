import React from "react";

interface ButtonI {
  action: () => void;
  title: string;
  type?: "button" | "submit" | "reset";
  color?: string;
}

const Button = ({ action, title, type }: ButtonI) => {
  return (
    <button
      className={`border border-black bg-orange-500 text-black px-2 mt-2`}
      onClick={action}
      type={type ? type : "button"}
    >
      {title}
    </button>
  );
};

export default Button;
