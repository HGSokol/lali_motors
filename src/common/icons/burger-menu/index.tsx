import type { FC } from "react";

export interface IIcon {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const BurgerMenu: FC<IIcon> = ({ width = 24, height = 10, className }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1.66667V0H24V1.66667H0ZM24 8.33333V10H0V8.33333H24Z"
        fill="white"
      />
    </svg>
  );
};

export default BurgerMenu;
