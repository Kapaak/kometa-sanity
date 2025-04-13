import {MouseEvent, useCallback} from 'react'
import {StringInputProps, set} from 'sanity'
import {Grid, Button} from '@sanity/ui'
import {DynamicPhosphorIcon, IconType, KeyofIcons} from './DynamicPhosphorIcon'

const availableIcons: Array<KeyofIcons> = [
  'ClipboardText',
  'Coin',
  'Swap',
  'Checks',
  'CreditCard',
  'Money',
  'HandCoins',
  'TreePalm',
  'Backpack',
  'FirstAid',
  'Shuffle',
  'File',
  'Paperclip',
  'EnvelopeOpen',
  'SmileyXEyes',
  'Smiley',
  'MapPin',
  'HouseLine',
  'Boot',
  'CalendarCheck',
  'Archive',
]

export function IconInput(props: StringInputProps) {
  const {onChange, value} = props

  const handleIconSelect = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const value = String(event.currentTarget.value)
      onChange(set(value))
    },
    [onChange]
  )

  return (
    <Grid columns={[2, 3, 4, 6]} gap={1}>
      {availableIcons.map((availableIcon) => {
        const Icon = DynamicPhosphorIcon({name: availableIcon}) as IconType
        return (
          <Button
            key={availableIcon}
            mode={value === availableIcon ? 'default' : 'ghost'}
            tone={value === availableIcon ? 'positive' : 'default'}
            value={availableIcon}
            onClick={handleIconSelect}
          >
            <Icon key={availableIcon} size={25} />
          </Button>
        )
      })}
    </Grid>
  )
}
