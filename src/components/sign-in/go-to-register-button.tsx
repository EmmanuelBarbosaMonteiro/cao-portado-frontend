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
      className="bg-custom-green-500 mt-5 w-full rounded-md py-2 text-gray-50 hover:opacity-80"
    >
      Faça seu cadastro
    </button>
  )
}
