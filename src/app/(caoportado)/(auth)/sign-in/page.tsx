'use client'

// import { Metadata } from 'next'
import dog from '@/assets/dogs.jpg'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { SyntheticEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

/* export const metadata: Metadata = {
  title: 'Login | Caoportado',
} */

export default function SignIn() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState(false)

  const isButtonDisabled = email === '' || password === ''

  const router = useRouter()

  const handleClick = () => {
    router.push('/sign-up')
  }

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      console.log(result)
      setError(true)
      return
    }

    router.replace('/customer')
  }

  return (
    <section className="flex min-h-screen items-center justify-center">
      {/* login container */}
      <div className="flex max-w-3xl rounded-xl bg-gray-100 p-5 shadow-lg">
        {/* form */}
        <div className="px-10 sm:w-1/2">
          <div className="flex items-center justify-center">
            <Image
              src={logo}
              alt=""
              className="h-15 w-15 -mt-8 object-cover"
              width={150}
              height={150}
            />
          </div>

          <h2 className="text-2xl font-bold text-custom-green-500">Login</h2>
          <p className="mt-4 text-sm text-gray-700">
            Faca seu login ou se cadastre-se
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className={`mt-8 rounded-md border p-2 ${error ? 'border-red-500' : 'border-gray-300'}`}
              type="text"
              name="email"
              id="email"
              required
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className={`mt-8 rounded-md border p-2 ${error ? 'border-red-500' : 'border-gray-300'}`}
              type="password"
              name="password"
              id="password"
              required
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              disabled={isButtonDisabled}
              type="submit"
              className={`${isButtonDisabled ? 'opacity-50' : 'opacity-100'} rounded-md bg-custom-green-500 py-2 text-gray-100 hover:opacity-80 disabled:cursor-not-allowed disabled:text-neutral-50 disabled:opacity-40`}
            >
              Continuar
            </button>
          </form>

          <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-500" />
            <p className="text-center text-sm">ou</p>
            <hr className="border-gray-500" />
          </div>

          <button
            disabled={!isButtonDisabled}
            onClick={handleClick}
            className={`${!isButtonDisabled ? 'opacity-50' : 'opacity-100'} mt-5 w-full rounded-md bg-custom-green-500 py-2 text-gray-50 hover:opacity-80`}
          >
            Faça seu cadastro
          </button>

          <p className="mt-5 border-t py-6 text-sm text-gray-500 hover:cursor-pointer hover:text-gray-700 hover:underline">
            Esqueceu sua senha?
          </p>
        </div>

        {/* image */}
        <div className="hidden w-1/2 p-0 sm:block">
          <Image src={dog} alt="" className="h-full rounded-xl object-cover" />
        </div>
      </div>
    </section>
  )
}
