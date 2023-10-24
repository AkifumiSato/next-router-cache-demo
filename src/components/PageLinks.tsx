'use client'

import { PrefetchKind } from 'next/dist/client/components/router-reducer/router-reducer-types'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function LinkItem({ href, prefetch, children }: { href: string, prefetch?: boolean, children: React.ReactNode }) {
  return (
    <li>
      <Link href={ href } prefetch={ prefetch }>{ children }</Link>
    </li>
  )
}

export default function PageLinks() {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/static/router_prefetch')
  }, [router])

  return (
    <>
      <ol>
        <LinkItem href="/">/</LinkItem>
        <LinkItem href="/static">/static</LinkItem>
        <LinkItem href="/static/with_fetch">/static/with_fetch</LinkItem>
        <LinkItem href="/static/prefetch_disabled" prefetch={ false }>/static/prefetch_disabled</LinkItem>
        <LinkItem href="/dynamic_rendering">/dynamic_rendering</LinkItem>
        <LinkItem href="/dynamic_route/111">/dynamic_route/111</LinkItem>
        <LinkItem href="/intercept/feed">/intercept/feed</LinkItem>
        <LinkItem href="/intercept/photo">/intercept/photo</LinkItem>
      </ol>
      <h3>features</h3>
      <ol>
        <LinkItem href="/server_actions">/server_actions</LinkItem>
      </ol>
    </>
  )
}