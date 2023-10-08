import { useState, useEffect } from 'react'

export const useCurrentTime = (timeCalculationFunction: () => string) => {
  const [currentTime, setCurrentTime] = useState<string>(
    timeCalculationFunction(),
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(timeCalculationFunction())
    }, 1000)

    return () => clearInterval(interval)
  }, [timeCalculationFunction])

  return currentTime
}
