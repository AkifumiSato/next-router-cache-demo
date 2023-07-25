import Link from 'next/link'
import React from 'react'

function LinkItem({ href, prefetch, children }: { href: string, prefetch?: boolean, children: React.ReactNode }) {
  return (
    <li>
      <Link href={ href } prefetch={ prefetch }>{ children }</Link>
    </li>
  )
}

export default function PageLinks() {
  return (
    <>
      <ol>
        <LinkItem href="/">/</LinkItem>
        <LinkItem href="/static">/static</LinkItem>
        <LinkItem href="/static/with_fetch">/static/with_fetch</LinkItem>
        <LinkItem href="/static/prefetch_disabled" prefetch={ false }>/static/prefetch_disabled</LinkItem>
        <LinkItem href="/dynamic">/dynamic</LinkItem>
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