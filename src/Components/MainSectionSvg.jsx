import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={925}
      height={882}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <linearGradient
          x1="0%"
          y1="27.881%"
          x2="100%"
          y2="72.119%"
          id="prefix__c"
        >
          <stop stopColor="#FF8F71" offset="0%" />
          <stop stopColor="#FF3E55" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="0%"
          y1="41.725%"
          x2="100%"
          y2="58.275%"
          id="prefix__e"
        >
          <stop stopColor="#FF8F71" offset="0%" />
          <stop stopColor="#FF3E55" offset="100%" />
        </linearGradient>
        <filter
          x="-10.9%"
          y="-11.7%"
          width="121.8%"
          height="132.8%"
          filterUnits="objectBoundingBox"
          id="prefix__b"
        >
          <feOffset dy={20} in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur
            stdDeviation={20}
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.421821759 0 0 0 0 0.554338424 0 0 0 0 0.893710371 0 0 0 0.243444056 0"
            in="shadowBlurOuter1"
          />
        </filter>
        <rect id="prefix__a" x={0} y={0} width={642} height={427} rx={15} />
      </defs>
      <g transform="translate(40)" fill="none" fillRule="evenodd">
        <rect
          fill="#2D2E40"
          opacity={0.08}
          transform="matrix(1 0 0 -1 0 890)"
          x={145}
          y={144}
          width={600}
          height={602}
          rx={300}
        />
        <rect
          stroke="#2D2E40"
          opacity={0.5}
          transform="matrix(1 0 0 -1 0 882)"
          x={105.5}
          y={100.5}
          width={679}
          height={681}
          rx={339.5}
        />
        <rect
          stroke="#2D2E40"
          opacity={0.25}
          transform="matrix(1 0 0 -1 0 882)"
          x={5.5}
          y={0.5}
          width={879}
          height={881}
          rx={439.5}
        />
        <g transform="translate(0 242)">
          <mask id="prefix__d" fill="#fff">
            <use xlinkHref="#prefix__a" />
          </mask>
          <g fillRule="nonzero">
            <use fill="#000" filter="url(#prefix__b)" xlinkHref="#prefix__a" />
            <use fill="url(#prefix__c)" xlinkHref="#prefix__a" />
          </g>
          <path
            d="M3 125h636a3 3 0 013 3v296a3 3 0 01-3 3H3a3 3 0 01-3-3V128a3 3 0 013-3z"
            fill="#2D2E40"
            fillRule="nonzero"
            mask="url(#prefix__d)"
          />
          <rect
            fill="#FFF"
            fillRule="nonzero"
            mask="url(#prefix__d)"
            x={90.523}
            y={47.709}
            width={135.785}
            height={137.165}
            rx={3}
          />
          <ellipse
            fill="#2D2E40"
            mask="url(#prefix__d)"
            cx={158.416}
            cy={116.888}
            rx={39.306}
            ry={39.36}
          />
          <rect
            fill="#FFF"
            fillRule="nonzero"
            mask="url(#prefix__d)"
            x={248.939}
            y={47.709}
            width={302.538}
            height={325.617}
            rx={3}
          />
        </g>
        <path
          d="M209 284c47.125-73.367 81.977-113.013 104.557-118.938 33.87-8.886 23.765 83.14 72.535 72.473 48.77-10.666 54.716-103.974 91.603-108.37 36.887-4.397 56.402 80.946 72.515 88.81 10.742 5.241 24.005-6.094 39.79-34.007"
          stroke="url(#prefix__e)"
          strokeWidth={8}
          strokeLinecap="round"
          transform="translate(0 242)"
        />
      </g>
    </svg>
  )
}

export default SvgComponent;