import { SVGProps } from 'react'

export function IconMin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586z"
      ></path>
    </svg>
  )
}
