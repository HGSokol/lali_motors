import type { FC } from "react";

export interface IFlame {
  width?: number;
  opacity?: number;
  color?: string;
  className?: string;
}

const Flame: FC<IFlame> = ({ width = 28, opacity = 0.6, className }) => {
  return (
    <svg
      width={width}
      height={width}
      className={className}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g style={{ mixBlendMode: "color-dodge" }}>
        <g
          clipPath="url(#paint0_diamond_2068_378_clip_path)"
          data-figma-skip-parse="true"
        >
          <g transform="matrix(0 0.0075 -0.0075 0 7.5 7.5)">
            <rect
              x="0"
              y="0"
              width="1133.33"
              height="1133.33"
              fill="url(#paint0_diamond_2068_378)"
              opacity={`${opacity}`}
              shapeRendering="crispEdges"
            />
            <rect
              x="0"
              y="0"
              width="1033.33"
              height="1033.33"
              transform="scale(1 -1)"
              fill="url(#paint0_diamond_2068_378)"
              opacity={`${opacity}`}
              shapeRendering="crispEdges"
            />
            <rect
              x="0"
              y="0"
              width="1133.33"
              height="1133.33"
              transform="scale(-1 1)"
              fill="url(#paint0_diamond_2068_378)"
              opacity={`${opacity}`}
              shapeRendering="crispEdges"
            />
            <rect
              x="0"
              y="0"
              width="1033.33"
              height="1033.33"
              transform="scale(-1)"
              fill="url(#paint0_diamond_2068_378)"
              opacity={`${opacity}`}
              shapeRendering="crispEdges"
            />
          </g>
        </g>
        <circle
          cx="7.5"
          cy="7.5"
          r="7.5"
          data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_DIAMOND&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:0.0},{&#34;color&#34;:{&#34;r&#34;:0.0,&#34;g&#34;:0.0,&#34;b&#34;:0.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[],&#34;transform&#34;:{&#34;m00&#34;:9.1848515267376569e-16,&#34;m01&#34;:-15.0,&#34;m02&#34;:15.0,&#34;m10&#34;:15.0,&#34;m11&#34;:9.1848515267376569e-16,&#34;m12&#34;:-9.1848515267376569e-16},&#34;opacity&#34;:0.50,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}"
        />
      </g>
      <defs>
        <clipPath id="paint0_diamond_2068_378_clip_path">
          <circle cx="7.5" cy="7.5" r="7.5" />
        </clipPath>
        <linearGradient
          id="paint0_diamond_2068_378"
          x1="-50"
          y1="-50"
          x2="500"
          y2="500"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Flame;
