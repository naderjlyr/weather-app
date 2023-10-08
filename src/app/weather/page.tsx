import { getUserLocation, getWeatherByCity } from '@/api/api'
import City from '@/app/components/City/City'
import { notFound } from 'next/navigation'

export default async function Page() {
  const weatherData = await getInitialWeather()
  if (!weatherData) notFound()

  return (
    <City
      cityName={weatherData.currentUserLocation.city}
      weatherData={weatherData.currentWeatherData.data}
    />
  )
}
async function getInitialWeather() {
  const currentUserLocation = await getUserLocation()
  const currentWeatherData = await getWeatherByCity(currentUserLocation.city)
  return {
    currentUserLocation,
    currentWeatherData,
  }
}
