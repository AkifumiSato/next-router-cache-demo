import CurrentUrl from '@/components/CurrentUrl'
import PageLinks from '@/components/PageLinks'
import React from 'react'

export default function Home({ params }: { params: { id: string } }) {
  return (
    <>
      <CurrentUrl>/dynamic_route/{ params.id }</CurrentUrl>
      <PageLinks />
    </>
  )
}

export const dynamic = 'force-dynamic'
