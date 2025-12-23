import React from 'react'

export const Logo = () => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '10px'
    }}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M476.6 327.9c-15.8-4.8-30.9 4.3-39.9 15.5l-61.7 76.6c-6.1 7.5-14.6 12.2-23.8 13.1L281 439.3c-28.2 2.7-56.4-6.4-78.3-25.2L164.9 384H48c-26.5 0-48-21.5-48-48s21.5-48 48-48h79.7l65.6-89.3c7.4-10.1 19.3-16 31.9-16H360c22.1 0 40 17.9 40 40s-17.9 40-40 40H276.9l-27.3 37.2 68.6 48.1c17.8 12.5 38.7 19 60.1 18.7L476.6 327.9z"
          fill="#0ea5e9"
        />
        <circle 
          cx="400" 
          cy="64" 
          r="48"
          fill="#0ea5e9"
        />
      </svg>
    </div>
  )
}

export const Icon = () => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M476.6 327.9c-15.8-4.8-30.9 4.3-39.9 15.5l-61.7 76.6c-6.1 7.5-14.6 12.2-23.8 13.1L281 439.3c-28.2 2.7-56.4-6.4-78.3-25.2L164.9 384H48c-26.5 0-48-21.5-48-48s21.5-48 48-48h79.7l65.6-89.3c7.4-10.1 19.3-16 31.9-16H360c22.1 0 40 17.9 40 40s-17.9 40-40 40H276.9l-27.3 37.2 68.6 48.1c17.8 12.5 38.7 19 60.1 18.7L476.6 327.9z"
        fill="currentColor"
      />
      <circle 
        cx="400" 
        cy="64" 
        r="48"
        fill="currentColor"
      />
    </svg>
  )
}

