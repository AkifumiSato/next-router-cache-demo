import CurrentUrl from '@/components/CurrentUrl'
import PageLinks from '@/components/PageLinks'
import { revalidateTag } from 'next/cache'
import React from 'react'

export default function Home() {
  async function updateAction() {
    'use server'
    console.log('>>> updateAction')
    revalidateTag('not_exist')
  }

  const random = Math.random()
  return (
    <>
      <CurrentUrl>/server_actions</CurrentUrl>
      <p>random: <span className="font-bold text-red-600">{ random }</span></p>
      <form action={ updateAction }>
        <button
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          update
        </button>
      </form>
      <PageLinks />
    </>
  )
}
