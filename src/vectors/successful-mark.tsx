import * as React from "react";
import { SVGProps } from "react";

const Index = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M46.504 6.798 19.36 33.755a3.518 3.518 0 0 1-4.988 0L1.496 20.968a3.46 3.46 0 0 1 0-4.954 3.518 3.518 0 0 1 4.988 0l10.382 10.31 24.65-24.48a3.518 3.518 0 0 1 4.988 0 3.46 3.46 0 0 1 0 4.954Z"
      fill="#6FCF97"
    />
  </svg>
);

export default Index;
