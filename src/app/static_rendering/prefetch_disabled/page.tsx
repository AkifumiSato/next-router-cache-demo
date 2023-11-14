import CurrentUrl from '@/components/CurrentUrl'
import PageLinks from '@/components/PageLinks'
import React from 'react'

export default function Page() {
  return (
    <>
      <CurrentUrl>/static_rendering/prefetch_disabled</CurrentUrl>
      <PageLinks />
    </>
  )
}
