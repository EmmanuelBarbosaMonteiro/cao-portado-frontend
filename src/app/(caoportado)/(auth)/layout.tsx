import { ReactNode } from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function AuthLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerSession(nextAuthOptions)

  if (session) {
    redirect('/customer')
  }

  return <div>{children}</div>
}
