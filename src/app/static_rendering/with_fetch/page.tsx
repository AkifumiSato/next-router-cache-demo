import CurrentUrl from '@/components/CurrentUrl'
import PageLinks from '@/components/PageLinks'
import React from 'react'

export default async function Page() {
  const product = await fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .finally(() => console.log(`>>> fetch`))
  return (
    <>
      <CurrentUrl>/static_rendering</CurrentUrl>
      <PageLinks />
      <div>
        product: {JSON.stringify(product)}
      </div>
    </>
  )
}
