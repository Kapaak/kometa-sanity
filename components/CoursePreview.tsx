import {Flex, Box, Text, Badge} from '@sanity/ui'
import {PreviewProps} from 'sanity'
import {joinValues} from '../utils'

type FaqPreviewProps = PreviewProps & {
  dayId: number
  timeFrom: string
  timeTo: string
  isFull?: boolean
  price: {
    priceSemester?: number
    priceYear?: number
  }
  discount?: number
}

export function CoursePreview(props: FaqPreviewProps) {
  const {dayId, timeTo, timeFrom, isFull, price, discount} = props

  const timeRange = `${timeFrom} - ${timeTo}`
  const priceLabel = `cena: ${joinValues([price?.priceSemester, price?.priceYear], {separator: '/'})} Kč`
  const discountLabel = discount ? `sleva: ${discount}%` : ''

  const available = isFull ? 'Plno' : 'Volno'
  return (
    <Flex direction="row" justify="space-between" align="center">
      <Flex direction="column" gap={2}>
        <Box>
          <Text size={2}>{convertDayIdToName(dayId)}</Text>
        </Box>
        <Box color="red">
          <Text color="red" size={1} muted>
            {joinValues([timeRange, priceLabel, discountLabel], {separator: ', '})}
          </Text>
        </Box>
      </Flex>
      <Badge padding={2} tone={isFull ? 'critical' : 'positive'}>
        {available}
      </Badge>
    </Flex>
  )
}
function convertDayIdToName(dayId: number): string {
  switch (dayId) {
    case 1:
      return 'Pondělí'
    case 2:
      return 'Úterý'
    case 3:
      return 'Středa'
    case 4:
      return 'Čtvrtek'
    case 5:
      return 'Pátek'
    default:
      return ''
  }
}
