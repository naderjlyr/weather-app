import { Dispatch, ElementType, FC, SetStateAction, useState } from 'react'
import { OpenWeatherResponse } from '@/types/Weather'
import {
  WiHumidity,
  WiBarometer,
  WiStrongWind,
  WiDaySunnyOvercast,
  WiDayCloudyHigh,
  WiAlien,
} from 'react-icons/wi'

interface WeatherProps {
  weatherData: OpenWeatherResponse | null
  useNewLayout: boolean // Receive the state from the parent
  setUseNewLayout: (value: boolean) => void // Receive the setter from the parent
}

const WeatherDetails: FC<WeatherProps> = ({
  weatherData,
  useNewLayout,
  setUseNewLayout,
}) => {
  return (
    <div className="w-full flex">
      <WeatherInfoItem
        label="Humidity"
        value={`${weatherData?.main?.humidity}%`}
        Icon={WiHumidity}
      />
      <WeatherInfoItem
        label="Visibility"
        value={`${weatherData?.visibility}m`}
        Icon={WiAlien}
      />
      <WeatherInfoItem label="UV Index" value="N/A" Icon={WiDaySunnyOvercast} />
      <WeatherInfoItem
        label="Pressure"
        value={`${weatherData?.main?.pressure} hPa`}
        Icon={WiBarometer}
      />
      <WeatherInfoItem
        label="Wind"
        value={`${weatherData?.wind?.speed} m/s`}
        Icon={WiStrongWind}
      />
      <WeatherInfoItem
        label="Clouds"
        value={`${weatherData?.clouds?.all}%`}
        Icon={WiDayCloudyHigh}
      />
      <div className="tooltip-container relative inline-block cursor-pointer rounded p-1">
        <div
          id="tooltip-right"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 ml-1 text-sm font-medium text-white bg-black rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Toggle layout
          <div className="tooltip-arrow"></div>
        </div>
        <svg
          onClick={() => setUseNewLayout(!useNewLayout)}
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 14"
        >
          <g
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          >
            <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
          </g>
        </svg>
      </div>
    </div>
  )
}

interface WeatherInfoItemProps {
  label: string
  value: string
  Icon: ElementType
}

const WeatherInfoItem: FC<WeatherInfoItemProps> = ({ label, value, Icon }) => {
  return (
    <div className="flex items-center">
      <Icon size={24} color="white" className="mr-2" />
      <div className="flex flex-row items-center">
        <span className="text-xs text-white mr-2 hidden md:block">{label}</span>
        <span className="text-sm text-white">{value}</span>
      </div>
    </div>
  )
}

export default WeatherDetails
