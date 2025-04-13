import {Grid, Select, Box} from '@sanity/ui'
import {ObjectInputProps, set} from 'sanity'
import {useCallback} from 'react'

interface SemesterMonthYearInputProps extends ObjectInputProps {
  months: {title: string; value: string}[]
  years: {title: string; value: string}[]
}

export function SemesterMonthYearInput(props: SemesterMonthYearInputProps) {
  const {onChange, value} = props

  const handleMonthChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const month = event.currentTarget.value
      onChange(set({...value, month}))
    },
    [onChange, value]
  )

  const handleYearChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const year = event.currentTarget.value
      onChange(set({...value, year}))
    },
    [onChange, value]
  )

  const months = [
    {title: 'Leden', value: '01'},
    {title: 'Únor', value: '02'},
    {title: 'Březen', value: '03'},
    {title: 'Duben', value: '04'},
    {title: 'Květen', value: '05'},
    {title: 'Červen', value: '06'},
    {title: 'Červenec', value: '07'},
    {title: 'Srpen', value: '08'},
    {title: 'Září', value: '09'},
    {title: 'Říjen', value: '10'},
    {title: 'Listopad', value: '11'},
    {title: 'Prosinec', value: '12'},
  ]

  const years = [
    {title: '2024', value: '2024'},
    {title: '2025', value: '2025'},
    {title: '2026', value: '2026'},
    {title: '2027', value: '2027'},
    {title: '2028', value: '2028'},
    {title: '2029', value: '2029'},
    {title: '2030', value: '2030'},
    {title: '2031', value: '2031'},
    {title: '2032', value: '2032'},
    {title: '2033', value: '2033'},
    {title: '2034', value: '2034'},
  ]

  return (
    <Grid columns={2} gap={2}>
      <Box>
        <Select onChange={handleMonthChange} value={value?.month || ''}>
          <option value="" disabled>
            Vybrat měsíc
          </option>
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.title}
            </option>
          ))}
        </Select>
      </Box>
      <Box>
        <Select onChange={handleYearChange} value={value?.year || ''}>
          <option value="" disabled>
            Vybrat rok
          </option>
          {years.map((year) => (
            <option key={year.value} value={year.value}>
              {year.title}
            </option>
          ))}
        </Select>
      </Box>
    </Grid>
  )
}
