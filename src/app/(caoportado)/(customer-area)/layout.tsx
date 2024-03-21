import { Header } from '@/components/customer-area/header'
import { ReactNode } from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function CustomerAreaLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerSession(nextAuthOptions)

  if (!session) {
    redirect('/sign-in')
  }

  return (
    <div>
      <Header />
      <div>{children}</div>
      <h1>Footer</h1>
    </div>
  )
}
