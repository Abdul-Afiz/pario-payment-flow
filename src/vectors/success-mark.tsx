import * as React from "react";
import { SVGProps } from "react";

const SuccessMark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={68}
    height={72}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56.504 17.798 29.36 44.755a3.518 3.518 0 0 1-4.988 0L11.496 31.968a3.46 3.46 0 0 1 0-4.954 3.518 3.518 0 0 1 4.988 0l10.382 10.31 24.65-24.48a3.518 3.518 0 0 1 4.988 0 3.46 3.46 0 0 1 0 4.954Z"
        fill="#6FCF97"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={-5}
        y={-4}
        width={78}
        height={92}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={6} />
        <feGaussianBlur stdDeviation={5} />
        <feColorMatrix values="0 0 0 0 0.129412 0 0 0 0 0.117647 0 0 0 0 0.262745 0 0 0 0.08 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_254" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2_254"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SuccessMark;
