import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next router cache demo',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
    <body>
    <main className="flex justify-center">
      <article className="format lg:format-lg max-w-5xl min-w-full p-5">
        <h1
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-fill-color-transparent w-fit">Router
          Cache Demo</h1>
        { children }
      </article>
    </main>
    </body>
    </html>
  )
}
