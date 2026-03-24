type Props = {
  domain: string
  size?: number
}

export default function CreativeIcon({ domain, size = 24 }: Props) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }

  switch (domain) {
    case 'theater':
      return (
        <svg {...props}>
          {/* flame */}
          <path d="M12 3c-1.5 2-3 4-3 6.5C9 12 10.3 13.5 12 13.5S15 12 15 9.5C15 7 13.5 5 12 3Z" />
          {/* wick */}
          <line x1="12" y1="13.5" x2="12" y2="16" />
          {/* candle top */}
          <rect x="8.5" y="16" width="7" height="6" rx="1" />
        </svg>
      )
    case 'coaching':
      return (
        <svg {...props}>
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      )
    case 'teaching':
      return (
        <svg {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case 'writing':
      return (
        <svg {...props}>
          <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
      )
    case 'music':
      return (
        <svg {...props}>
          <rect x="2" y="10" width="3" height="10" rx="1" />
          <rect x="6" y="6" width="3" height="14" rx="1" />
          <rect x="10" y="10" width="3" height="10" rx="1" />
          <rect x="14" y="4" width="3" height="16" rx="1" />
          <rect x="18" y="8" width="3" height="12" rx="1" />
        </svg>
      )
    default:
      return null
  }
}
