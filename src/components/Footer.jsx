import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black px-4 sm:px-6 lg:px-28 py-4 lg:py-6 flex items-center justify-between mt-12'>
      <img className='h-5 lg:h-9' src="/assets/footer-logo.webp" width="36" height="36" alt="" />

      <div className='text-white lg:font-semibold lg:text-sm font-normal text-xs sm:text-sm text-right lg:space-y-3'>
        <p>@ 2026 Personal Portfolio</p>
        <p>Made by -MB</p>
      </div>
    </div>
  )
}
