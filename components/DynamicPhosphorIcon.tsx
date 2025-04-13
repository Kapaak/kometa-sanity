import * as Icons from '@phosphor-icons/react'

export type IconType = Icons.Icon

export type KeyofIcons = keyof typeof Icons

export const DynamicPhosphorIcon = ({name}: {name: keyof typeof Icons}) => Icons[name]
