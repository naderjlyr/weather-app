import City from './components/City/City'
import { getUserLocation, getWeatherByCity } from '@/api/api'

export default async function Page() {
  const userLocation = await getUserLocation()
  const userWeatherData = await getWeatherByCity(userLocation?.city)
  return (
    <City cityName={userLocation?.city} weatherData={userWeatherData?.data} />
  )
}
