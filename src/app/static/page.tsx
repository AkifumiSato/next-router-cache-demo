import CurrentUrl from '@/components/CurrentUrl'
import PageLinks from '@/components/PageLinks'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <>
      <CurrentUrl>/static</CurrentUrl>
      <PageLinks />
    </>
  )
}
