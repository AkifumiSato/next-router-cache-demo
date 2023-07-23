import CurrentUrl from '@/components/CurrentUrl'
import PageLinks from '@/components/PageLinks'
import React from 'react'

export default async function Home() {
  const product = await fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
  return (
    <>
      <CurrentUrl>/static</CurrentUrl>
      <PageLinks />
      <div>
        product: {JSON.stringify(product)}
      </div>
    </>
  )
}
