// import {NumberInputProps} from 'sanity'

// export function DoorsOpenInput(props: NumberInputProps) {
//   return <div style={{border: '1px solid red'}}>DoorsOpenInput</div>
// }

import React from 'react'
import {NumberInputProps, useFormValue} from 'sanity'
import {Stack, Text} from '@sanity/ui'

function subtractMinutesFromDate(date: string, minutes: number) {
  return new Date(new Date(date).getTime() + minutes * 60000)
}

export function DoorsOpenInput(props: NumberInputProps) {
  const date = useFormValue(['date']) as string | undefined

  if (!date || !props.value) {
    return props.renderDefault(props)
  }

  return (
    <Stack space={3}>
      {props.renderDefault(props)}
      <Text size={1}>
        Doors open{' '}
        {subtractMinutesFromDate(date, props.value).toLocaleDateString(undefined, {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        })}
      </Text>
    </Stack>
  )
}
