import { SVGProps } from "react";

const PageBackgroundSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 1437 650"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1437-6H-9v624l1446-281.704V-6Z"
      fill="url(#a)"
      fillOpacity={0.2}
    />
    <defs>
      <linearGradient
        id="a"
        x1={714}
        y1={-6}
        x2={714}
        y2={618}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F2C94C" />
        <stop offset={1} stopColor="#F2994A" />
      </linearGradient>
    </defs>
  </svg>
);

export default PageBackgroundSvg;
