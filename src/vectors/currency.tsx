import * as React from "react";
import { SVGProps } from "react";

const Currency = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M25.63 8.194V6.047h-2.336V.715h-2.78v5.332h-9.316L5.21.741V.714H2.43v5.333H.095v2.146h2.336v1.878H.095v2.147h2.336V17.5h2.78v-5.282h9.305l5.981 5.282.018-.005v.005h2.78v-5.282h2.336v-2.146h-2.337V8.194h2.337ZM5.21 4l2.317 2.046H5.211V4.001Zm0 6.07V8.195h4.748l2.127 1.878H5.21Zm15.305 4.235-2.356-2.088h2.356v2.088Zm0-4.234h-4.777l-2.12-1.878h6.897v1.878Z"
      fill="#F2F2F2"
    />
  </svg>
);

export default Currency;
