import type { FC } from "react";
import { IIcon } from "~/common/types/icon";

const Cross: FC<IIcon> = ({
  width = 24,
  height = 24,
  className,
  color = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 4.49206L20.7207 3L12 10.6825L3.27925 3L2 4.49206L10.5179 12L2 19.5079L3.27925 21L12 13.3175L20.7207 21L22 19.5079L13.4821 12L22 4.49206Z"
        fill={color}
      />
    </svg>
  );
};

export default Cross;
