'use client'

import { useRouter } from 'next/navigation'

export default function NavigationRegisterButton() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/sign-up')
  }

  return (
    <button
      onClick={handleClick}
      className="mt-5 w-full rounded-md bg-green-400 py-2 text-gray-50 hover:bg-green-500 hover:text-gray-100"
    >
      Faça seu cadastro
    </button>
  )
}
