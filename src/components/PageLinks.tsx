import Link from 'next/link'
import React from 'react'

function LinkItem({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <li>
      <Link href={ href }>{ children }</Link>
    </li>
  )
}

export default function PageLinks() {
  return (
    <ol>
      <LinkItem href="/">/</LinkItem>
      <LinkItem href="/static">/static</LinkItem>
      <LinkItem href="/dynamic">/dynamic</LinkItem>
    </ol>
  )
}