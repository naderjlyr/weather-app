# Weather App

A simple weather application designed with modularity and usability in mind.

Demo : 
https://weatherapp-d6c7eb.netlify.app/

## Overview

The Weather App allows users to:
- Fetch user's location data `IPStack` API.
- Retrieve weather data based on a given city `OpenWeatherMap` API.
- Obtain an image for a given city from `Unsplash` API.
- Switch between Celsius and Fahrenheit units.
- Toggle between different layout views.
- View current time for a selected city.

## Modules

### API Integrations
- **IPStack Integration**: Fetches the user's location.
- **OpenWeather Integration**: Retrieves weather data based on the provided city.
- **City Image API**: Obtains a representative image for a given city.

### Components
- **City Component**: The main component that displays the city-specific data.
- **DefaultLayout** and **NewLayout**: Two different layout options for displaying weather details.
- **WeatherInfo**: Displays the primary weather data.
- **TimeInfo**: Displays the current time for a selected city.
- **WeatherDetails**: Provides additional details about the weather.
- **CitySelector**: Allows users to select a city.

### Utility Functions
- **useCurrentTime**: Custom hook to keep track of the current time.
- **celsiusToFahrenheit**: Converts Celsius to Fahrenheit.
- **formatDateStandard**: Formats a given date to a standard format.
- **getCityCurrentTime**: Gets the current time for a specified city based on its timezone offset.

### Data
- **cities**: An array containing names of some popular cities like London, Amsterdam, Moscow, and New York, Tehran (Hometown) and user's current location is added dynamically.

## Installation & Usage

1. Clone the repository.
2. Install the required dependencies with `npm install`.
3. Set up the required environment variables:
    - `NEXT_PUBLIC_IPSTACK_URL`
    - `NEXT_PUBLIC_IPSTACK_API_KEY`
    - `NEXT_PUBLIC_OPEN_WEATHER_URL`
    - `NEXT_PUBLIC_OPEN_WEATHER_API_KEY`
    - `NEXT_PUBLIC_CITY_IMAGE_URL`
    - `NEXT_PUBLIC_CITY_IMAGE_API_KEY`
4. Start the development server with `npm run dev`.
5. Visit `localhost:3000` on your browser to see the application in action.

## Dependencies
- **React & Next.js**: For building the UI and server-side rendering.
- **Axios**: For making HTTP requests.
- **Framer-Motion**: For animations.

## Notes
- Always ensure to secure your API keys.
- Due to the code truncation, some components like WeatherDetails, WiHumidity, WiBarometer, etc., were not fully described. Ensure to explore the codebase for a comprehensive understanding of all components and utilities.

## Contributions
Contributions are welcome! Please submit a PR with any improvements or features.
