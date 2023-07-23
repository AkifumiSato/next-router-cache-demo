import CurrentUrl from '@/components/CurrentUrl'
import PageLinks from '@/components/PageLinks'
import React from 'react'

export default function Home() {
  return (
    <>
      <CurrentUrl>/dynamic</CurrentUrl>
      <PageLinks />
    </>
  )
}

export const dynamic = 'force-dynamic'
