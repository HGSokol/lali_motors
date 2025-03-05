import type { FC } from "react";
import { IIcon } from "~/common/types/icon";

const Trash: FC<IIcon> = ({ width = 14, height = 16, className }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 3.63235H13M4.75 1.25H9.25M5.5 11.5735V6.80882M8.5 11.5735V6.80882M9.625 14.75H4.375C3.54657 14.75 2.875 14.0389 2.875 13.1618L2.53255 4.45953C2.5148 4.00837 2.85544 3.63235 3.2819 3.63235H10.7181C11.1446 3.63235 11.4852 4.00837 11.4674 4.45953L11.125 13.1618C11.125 14.0389 10.4534 14.75 9.625 14.75Z"
        stroke="#060606"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Trash;
