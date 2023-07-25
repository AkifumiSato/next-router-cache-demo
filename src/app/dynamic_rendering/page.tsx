import CurrentUrl from '@/components/CurrentUrl'
import PageLinks from '@/components/PageLinks'
import React from 'react'

export default function Page() {
  return (
    <>
      <CurrentUrl>/dynamic_rendering</CurrentUrl>
      <PageLinks />
    </>
  )
}

export const dynamic = 'force-dynamic'
