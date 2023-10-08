export const getCityCurrentTime = (cityTimezoneOffset: number | undefined) => {
  if (cityTimezoneOffset === undefined) return ''

  const date = new Date()
  const utcTime = date.getTime() + date.getTimezoneOffset() * 60000
  const cityTimeInMs = utcTime + cityTimezoneOffset * 1000

  const cityTime = new Date(cityTimeInMs)

  return cityTime
    .toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
    .replace(/am/i, 'AM')
    .replace(/pm/i, 'PM')
}
