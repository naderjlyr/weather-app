import { OpenWeatherResponse } from '@/types/Weather'
import CitySelector from '@/app/components/CitySelector/CitySelector'
import WeatherInfo from '@/app/components/WeatherInfo/WeatherInfo'
import { celsiusToFahrenheit } from '@/utils/celsiusToFahrenheit'
import TimeInfo from '@/app/components/TimeInfo/TimeInfo'
import { formatDateStandard } from '@/utils/formatDate'
import WeatherDetails from '@/app/components/WeatherDetails/WeatherDetails'
import { Dispatch, SetStateAction } from 'react'

type NewLayoutProps = {
  cityName: string
  handleCitySelect: (cityName: string) => void
  weatherData: OpenWeatherResponse | null
  selectedUnit: 'C' | 'F'
  toggleUnit: () => void
  currentTime: string | null
  useNewLayout: boolean
  setUseNewLayout: Dispatch<SetStateAction<boolean>>
  bgImagePath?: string
}
export const NewLayout = ({
  bgImagePath,
  cityName,
  handleCitySelect,
  weatherData,
  selectedUnit,
  toggleUnit,
  currentTime,
  useNewLayout,
  setUseNewLayout,
}: NewLayoutProps) => {
  return (
    <div
      className="h-screen relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImagePath})` }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-between p-8 backdrop-blur-md bg-black bg-opacity-50">
        <div className="bg-opacity-60 p-2 rounded">
          <CitySelector
            useNewLayout={useNewLayout}
            onCitySelect={handleCitySelect}
            currentCity={cityName}
          />
        </div>

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

        <div className="w-full bg-black bg-opacity-70 shadow-lg p-6 mt-6 rounded">
          <WeatherDetails
            useNewLayout={useNewLayout}
            weatherData={weatherData}
            setUseNewLayout={setUseNewLayout}
          />
        </div>
      </div>
    </div>
  )
}
