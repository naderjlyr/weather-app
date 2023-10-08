import City from '@/app/components/City/City'
import { getUserLocation, getWeatherByCity } from '@/api/api'
import { notFound } from 'next/navigation'
import { cities } from '@/utils/constants'
import { motion } from 'framer-motion'
import { router } from 'next/client'

export default async function Page({ params }: { params: { slug: string } }) {
  const decodedCity = decodeURIComponent(params.slug)
  const { city: userLocation } = await getUserLocation()
  cities.push(userLocation)

  const weatherData = await getWeatherByCity(decodedCity)
  if (weatherData.status === 404) notFound()

  return <City cityName={decodedCity} weatherData={weatherData.data} />
}
