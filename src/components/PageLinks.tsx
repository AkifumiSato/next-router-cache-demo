'use client'

import Link from 'next/link'
import {useRouter} from 'next/navigation'
import React, {useEffect} from 'react'


export default function PageLinks() {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/static/router_prefetch')
  }, [router])

  return (
    <>
      <ol>
        <li>
          <Link href="/">/</Link>
        </li>
        <li>
          <Link href="/static">/static</Link>
        </li>
        <li>
          <Link href="/static/with_fetch">/static/with_fetch</Link>
        </li>
        <li>
          <Link href="/static/prefetch_disabled" prefetch={false}>/static/prefetch_disabled</Link>
        </li>
        <li>
          <Link href="/dynamic_rendering">/dynamic_rendering</Link>
        </li>
        <li>
          <Link href="/dynamic_route/111">/dynamic_route/111</Link>
        </li>
      </ol>
      <h3>features</h3>
      <ol>
        <li>
          <Link href="/intercept/feed">/intercept/feed</Link>
        </li>
        <li>
          <Link href="/intercept/photo">/intercept/photo</Link>
        </li>
        <li>
          <Link href="/server_actions">/server_actions</Link>
        </li>
      </ol>
    </>
  )
}