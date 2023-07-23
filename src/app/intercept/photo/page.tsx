import CurrentUrl from '@/components/CurrentUrl'
import PageLinks from '@/components/PageLinks'
import React from 'react'

export default function Home() {
  return (
    <>
      <CurrentUrl>/intercept/photo</CurrentUrl>
      <PageLinks />
    </>
  )
}

export const dynamic = 'force-dynamic'
