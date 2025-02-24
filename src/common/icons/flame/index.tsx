import type { FC } from "react";

export interface IIcon {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const Flame: FC<IIcon> = ({ width = 28, height = 29, className }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="flameGradient"
          cx="50%"
          cy="50%"
          r="50%"
          fx="50%"
          fy="50%"
        >
          <stop offset="0%" stopColor="white" stopOpacity="1" />{" "}
          <stop offset="100%" stopColor="white" stopOpacity="0" />{" "}
        </radialGradient>
      </defs>
      <circle
        cx="17.5"
        cy="17.5"
        r="17.5"
        fill="url(#flameGradient)"
        style={{ mixBlendMode: "color-dodge" }}
      />
    </svg>
  );
};

export default Flame;
