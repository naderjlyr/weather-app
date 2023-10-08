'use client'
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { getUserLocation } from '@/api/api'
import { cities } from '@/utils/constants'

interface Props {
  onCitySelect: (city: string) => void
  currentCity: string
  useNewLayout: boolean
}

const CitySelector: React.FC<Props> = ({
  onCitySelect,
  currentCity,
  useNewLayout,
}) => {
  const [userLocation, setUserLocation] = useState<string>()

  useEffect(() => {
    ;(async () => {
      try {
        const location = await getUserLocation()
        if (!cities.includes(location.city)) cities.push(location.city)
        setUserLocation(location.city)
      } catch (error) {
        console.error('Failed to fetch user location', error)
      }
    })()
  }, [])
  const widthClass = useNewLayout ? 'w-full' : 'w-1/4'

  return (
    <select
      className={`${widthClass} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
      value={currentCity}
      onChange={(e) => onCitySelect(e.target.value)}
      data-testid="city-selector"
    >
      {cities.map((city) => {
        let customLabel: string = city
        if (city === userLocation) {
          customLabel = `${userLocation} (Current)`
        }
        return (
          <option key={city} value={city}>
            {customLabel}
          </option>
        )
      })}
    </select>
  )
}

export default CitySelector
