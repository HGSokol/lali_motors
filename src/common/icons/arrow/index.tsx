import type { FC } from "react";
import { IIcon } from "~/common/types/icon";

const Arrow: FC<IIcon> = ({ width = 12, height = 12, className }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.05018 10.9468L10.9497 1.04733M10.9497 1.04733L2.46439 1.04733M10.9497 1.04733L10.9497 9.53261"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Arrow;
