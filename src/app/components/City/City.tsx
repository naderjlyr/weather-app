'use client'
import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { OpenWeatherResponse } from '@/types/Weather'
import { getCityCurrentTime } from '@/utils/getCityCurrentTime'
import { useCurrentTime } from '@/hooks/useCurrentTime'
import { DefaultLayout } from '@/app/components/Layout/DefaultLayout'
import { NewLayout } from '@/app/components/Layout/NewLayout'
import { getCityImageByCity } from '@/api/api'
import { AnimatePresence, motion } from 'framer-motion'

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}
type CityProps = {
  cityName: string
  weatherData: OpenWeatherResponse | null
}

export const City: FC<CityProps> = ({ cityName, weatherData }) => {
  const router = useRouter()
  const [bgImagePath, setBgImagePath] = useState<string>()

  useEffect(() => {
    async function loadImage() {
      const { imagePath } = await getCityImageByCity(cityName)
      if (imagePath) {
        setBgImagePath(imagePath)
      }
    }

    loadImage()
  }, [cityName])
  const [selectedUnit, setSelectedUnit] = useState<'C' | 'F'>('C')
  const [useNewLayout, setUseNewLayout] = useState(false)

  const currentTime = useCurrentTime(() =>
    getCityCurrentTime(weatherData?.timezone),
  )
  const toggleUnit = () => {
    setSelectedUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'))
  }
  const handleCitySelect = (selectedCity: string) => {
    router.push(`/weather/${selectedCity}`)
  }
  return (
    <AnimatePresence mode="wait">
      {useNewLayout ? (
        <motion.div
          key="newLayout"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <NewLayout
            bgImagePath={bgImagePath}
            cityName={cityName}
            handleCitySelect={handleCitySelect}
            weatherData={weatherData}
            selectedUnit={selectedUnit}
            toggleUnit={toggleUnit}
            currentTime={currentTime}
            useNewLayout={useNewLayout}
            setUseNewLayout={setUseNewLayout}
          />
        </motion.div>
      ) : (
        <motion.div
          key="defaultLayout"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <DefaultLayout
            bgImagePath={bgImagePath}
            cityName={cityName}
            handleCitySelect={handleCitySelect}
            weatherData={weatherData}
            selectedUnit={selectedUnit}
            toggleUnit={toggleUnit}
            setUseNewLayout={setUseNewLayout}
            useNewLayout={useNewLayout}
            currentTime={currentTime}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default City
