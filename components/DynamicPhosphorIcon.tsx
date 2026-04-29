import {ReactElement} from 'react'

type IconProps = {
  size?: number
}

export type IconType = (props: IconProps) => ReactElement

export type KeyofIcons = string

export const DynamicPhosphorIcon = ({name}: {name: KeyofIcons}): IconType => {
  return ({size = 24}: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" role="img" aria-label={name}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
