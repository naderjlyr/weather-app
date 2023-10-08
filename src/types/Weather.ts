type Weather = {
  id: number
  main: string
  description: string
  icon: string
}

type MainWeatherData = {
  temp: number
  tempCelsius?: number
  tempFahrenheit?: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

type Wind = {
  speed: number
  deg: number
}

type Clouds = {
  all: number
}

type SystemData = {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

export type OpenWeatherResponse = {
  coord: {
    lon: number
    lat: number
  }
  weather: Weather[]
  base: string
  main: MainWeatherData
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: SystemData
  timezone: number
  id: number
  name: string
  cod: number
}
