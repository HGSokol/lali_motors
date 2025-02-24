import type { FC } from "react";

export interface IIcon {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const ArrowDown: FC<IIcon> = ({ width = 28, height = 28, className }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6752 23.6921L23.752 17.3923C23.9108 17.1953 24 16.9281 24 16.6495C24 16.3708 23.9108 16.1036 23.752 15.9066C23.5933 15.7096 23.3779 15.5989 23.1534 15.5989C22.9289 15.5989 22.7135 15.7096 22.5548 15.9066L18.9227 20.4149L18.9227 4.04996C18.9227 3.77149 18.8336 3.50443 18.6749 3.30753C18.5162 3.11062 18.301 3 18.0766 3L2.84614 3C2.62173 3 2.40651 3.11062 2.24783 3.30753C2.08915 3.50443 2 3.77149 2 4.04996C2 4.32843 2.08915 4.59549 2.24783 4.79239C2.40651 4.9893 2.62173 5.09992 2.84614 5.09992L17.2304 5.09992L17.2304 20.4149L13.5984 15.9066C13.4396 15.7096 13.2243 15.5989 12.9998 15.5989C12.7752 15.5989 12.5599 15.7096 12.4011 15.9066C12.2424 16.1036 12.1532 16.3708 12.1532 16.6495C12.1532 16.9281 12.2424 17.1953 12.4011 17.3923L17.4779 23.6921C17.5565 23.7897 17.6498 23.8671 17.7526 23.92C17.8553 23.9728 17.9654 24 18.0766 24C18.1878 24 18.2979 23.9728 18.4006 23.92C18.5033 23.8671 18.5966 23.7897 18.6752 23.6921Z"
        fill="url(#paint0_linear_2011_371)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2011_371"
          x1="2"
          y1="13.5"
          x2="24"
          y2="13.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FDCF6A" />
          <stop offset="0.5" stop-color="#FDD67C" />
          <stop offset="1" stop-color="#FFE5AF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ArrowDown;
