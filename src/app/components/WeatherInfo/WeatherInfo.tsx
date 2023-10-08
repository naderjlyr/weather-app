import React from 'react'
import { OpenWeatherResponse } from '@/types/Weather'
type WeatherInfoProps = {
  weatherData: OpenWeatherResponse | null
  selectedUnit: 'C' | 'F'
  celsiusToFahrenheit: (celsius: number) => number
  toggleUnit: () => void
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({
  weatherData,
  selectedUnit,
  celsiusToFahrenheit,
  toggleUnit,
}) => {
  return (
    <div className="w-[300px] bg-black bg-opacity-70 shadow-lg p-6 rounded grid grid-cols-3 gap-4">
      <div className="flex items-center justify-center">
        <div className="text-6xl text-white">
          {selectedUnit === 'C'
            ? weatherData?.main?.tempCelsius
            : weatherData?.main?.tempFahrenheit}
          °
        </div>
      </div>
      <div className="flex flex-col items-start justify-center ml-2">
        <span
          className={
            selectedUnit === 'C'
              ? 'text-white font-bold'
              : 'text-gray-400 cursor-pointer'
          }
          onClick={selectedUnit !== 'C' ? toggleUnit : undefined}
        >
          C
        </span>
        <span
          className={
            selectedUnit === 'F'
              ? 'text-white font-bold'
              : 'text-gray-400 cursor-pointer'
          }
          onClick={selectedUnit !== 'F' ? toggleUnit : undefined}
        >
          F
        </span>
      </div>
      <div className="flex flex-col">
        <img
          src={`/images/icons/${weatherData?.weather?.[0]?.icon}.png`}
          alt="Weather Icon"
          className="h-12 w-12 mb-2"
        />
        <div className="text-white">{weatherData?.weather?.[0]?.main}</div>
      </div>
    </div>
  )
}

export default WeatherInfo
