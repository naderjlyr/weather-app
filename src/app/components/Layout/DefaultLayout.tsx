import WeatherInfo from '@/app/components/WeatherInfo/WeatherInfo'
import { celsiusToFahrenheit } from '@/utils/celsiusToFahrenheit'
import TimeInfo from '@/app/components/TimeInfo/TimeInfo'
import { formatDateStandard } from '@/utils/formatDate'
import CitySelector from '@/app/components/CitySelector/CitySelector'
import WeatherTabs from '@/app/components/WeatherDetails/WeatherDetails'
import { OpenWeatherResponse } from '@/types/Weather'
import { Dispatch, SetStateAction } from 'react'
import WeatherDetails from '@/app/components/WeatherDetails/WeatherDetails'
export type DefaultLayoutProps = {
  cityName: string
  handleCitySelect: (cityName: string) => void
  weatherData: OpenWeatherResponse | null
  selectedUnit: 'C' | 'F'
  toggleUnit: () => void
  currentTime: string
  bgImagePath?: string
  useNewLayout: boolean
  setUseNewLayout: Dispatch<SetStateAction<boolean>>
}
export const DefaultLayout = ({
  bgImagePath,
  cityName,
  handleCitySelect,
  weatherData,
  selectedUnit,
  toggleUnit,
  currentTime,
  useNewLayout,
  setUseNewLayout,
}: DefaultLayoutProps) => {
  return (
    <div
      className="h-screen relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImagePath})` }}
    >
      <div className="absolute inset-0 backdrop-blur-md"></div>
      <div className="h-screen flex w-full mx-auto my-auto rounded-lg relative bg-cover flex-col md:w-full">
        <div
          className="flex flex-col md:flex-row justify-between h-full items-start p-6 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImagePath})` }}
        >
          <WeatherInfo
            weatherData={weatherData}
            selectedUnit={selectedUnit}
            celsiusToFahrenheit={celsiusToFahrenheit}
            toggleUnit={toggleUnit}
          />
          <TimeInfo
            currentTime={currentTime}
            formatDateStandard={formatDateStandard}
          />
        </div>

        <div className="bg-black bg-opacity-50 backdrop-blur-md rounded-lg rounded-t-none flex flex-row">
          <div className="w-full bg-black bg-opacity-50 backdrop-blur-md p-2 rounded-lg rounded-t-none flex flex-col sm:flex-col lg:flex-row justify-evenly">
            <CitySelector
              useNewLayout={useNewLayout}
              onCitySelect={handleCitySelect}
              currentCity={cityName}
            />
            <WeatherDetails
              setUseNewLayout={setUseNewLayout}
              useNewLayout={useNewLayout}
              weatherData={weatherData}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
