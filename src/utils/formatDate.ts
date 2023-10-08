export const formatDateStandard = (date: Date) => {
  return new Intl.DateTimeFormat('en-US').format(date)
}
export const offsetToTimezone = (offsetInSeconds: number): string => {
  const hours = offsetInSeconds / 3600
  return hours >= 0 ? `Etc/GMT-${hours}` : `Etc/GMT+${Math.abs(hours)}`
}
