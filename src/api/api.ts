import { IPStackResponse } from '@/types/IPStack'
import { OpenWeatherResponse } from '@/types/Weather'
import { cityImageAxios, ipStackAxios, openWeatherAxios } from './axiosConfig'
import { celsiusToFahrenheit } from '@/utils/celsiusToFahrenheit'
type WeatherResponseWithStatus = {
  data: OpenWeatherResponse | null
  status: number
}
type CityImageResponseWithStatus = {
  imagePath: string | null
  status: number
}
export const getUserLocation = async (): Promise<IPStackResponse> => {
  const response = await ipStackAxios.get<IPStackResponse>('/check')
  return response.data
}

export const getWeatherByCity = async (
  city: string,
): Promise<WeatherResponseWithStatus> => {
  let responseStatus: number
  let responseData: OpenWeatherResponse | null = null

  try {
    const response = await openWeatherAxios.get<OpenWeatherResponse>('', {
      params: { q: city },
    })

    responseData = response.data
    responseStatus = response.status

    if (responseData?.main?.temp !== undefined) {
      const roundedTemp = Math.round(responseData.main.temp)
      responseData.main.tempCelsius = roundedTemp
      responseData.main.tempFahrenheit = Math.round(
        celsiusToFahrenheit(roundedTemp),
      )
    }
  } catch (error: any) {
    if (error?.response?.status) {
      responseStatus = error.response.status
    } else {
      responseStatus = 500
    }
  }

  return {
    data: responseData,
    status: responseStatus,
  }
}

export const getCityImageByCity = async (
  city: string,
): Promise<CityImageResponseWithStatus> => {
  let responseStatus: number
  let imagePath: string | null = null

  try {
    const response = await cityImageAxios.get('/search/photos', {
      params: {
        query: city,
        page: 1,
        per_page: 1,
      },
    })

    if (
      response.data &&
      response.data.results &&
      response.data.results.length > 0
    ) {
      imagePath = response.data.results[0].urls.regular
      responseStatus = response.status
    } else {
      throw new Error('No images found for the given city.')
    }
  } catch (error: any) {
    if (error?.response?.status) {
      responseStatus = error.response.status
    } else {
      responseStatus = 500
    }
  }

  return {
    imagePath,
    status: responseStatus,
  }
}
