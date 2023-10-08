import axios from 'axios'

export const ipStackAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_IPSTACK_URL,
  params: {
    access_key: process.env.NEXT_PUBLIC_IPSTACK_API_KEY,
  },
})

export const openWeatherAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_OPEN_WEATHER_URL,
  params: {
    appid: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
    units: 'metric',
  },
})
export const cityImageAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CITY_IMAGE_URL,
  headers: {
    Authorization: `Client-ID ${process.env.NEXT_PUBLIC_CITY_IMAGE_API_KEY}`,
  },
})
