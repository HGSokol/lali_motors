import type { FC } from "react";
import { IIcon } from "~/common/types/icon";

const ArrowLink: FC<IIcon> = ({ width = 12, height = 13, className }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11.5L11 1.5M11 1.5L2.42857 1.5M11 1.5V10.0714"
        stroke="url(#paint0_linear_2014_1523)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2014_1523"
          x1="6"
          y1="1.5"
          x2="6"
          y2="11.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDCF6A" />
          <stop offset="0.5" stopColor="#FDD67C" />
          <stop offset="1" stopColor="#FFE5AF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ArrowLink;
