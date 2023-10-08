import React from 'react'

type TimeInfoProps = {
  currentTime: string | null
  formatDateStandard: (date: Date) => string
}

const TimeInfo: React.FC<TimeInfoProps> = ({
  currentTime,
  formatDateStandard,
}) => {
  return (
    <div className="w-[300px] bg-black bg-opacity-70 shadow-lg p-4 rounded">
      <h1 className="text-6xl text-white text-center">
        {currentTime || 'Loading time...'}
      </h1>
      <p className="text-white text-sm text-left">
        {formatDateStandard(new Date())}
      </p>
    </div>
  )
}

export default TimeInfo
