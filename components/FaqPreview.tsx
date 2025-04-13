import {Flex, Box} from '@sanity/ui'
import {PreviewProps} from 'sanity'
import {DynamicPhosphorIcon, IconType, KeyofIcons} from './DynamicPhosphorIcon'

type FaqPreviewProps = PreviewProps & {
  icon?: KeyofIcons
  title?: string
}

export function FaqPreview(props: PreviewProps) {
  const {icon = null, title = ''} = props as FaqPreviewProps

  if (!icon)
    return (
      <Flex align="center" gap={2}>
        <Box>{title}</Box>
      </Flex>
    )

  const Icon = DynamicPhosphorIcon({name: icon}) as IconType

  return (
    <Flex align="center" gap={2}>
      {icon && <Icon size={24} />}
      <Box>{title}</Box>
    </Flex>
  )
}
