'use client'

import Link from 'next/link'
import {useRouter} from 'next/navigation'
import React, {useEffect} from 'react'


export default function PageLinks() {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/static_rendering/router_prefetch')
  }, [router])

  return (
    <>
      <h3>type of rendering</h3>
      <ol>
        <li>
          <Link href="/">/</Link>
        </li>
        <li>
          <Link href="/static_rendering">/static_rendering</Link>
        </li>
        <li>
          <Link href="/static_rendering/with_fetch">/static_rendering/with_fetch</Link>
        </li>
        <li>
          <Link href="/static_rendering/prefetch_disabled" prefetch={false}>/static_rendering/prefetch_disabled</Link>
        </li>
        <li>
          <Link href="/dynamic_rendering">/dynamic_rendering</Link>
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