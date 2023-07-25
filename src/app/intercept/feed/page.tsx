import CurrentUrl from '@/components/CurrentUrl'
import PageLinks from '@/components/PageLinks'
import React from 'react'

export default function Page() {
  return (
    <>
      <CurrentUrl>/intercept/feed</CurrentUrl>
      <PageLinks />
    </>
  )
}

export const dynamic = 'force-dynamic'
