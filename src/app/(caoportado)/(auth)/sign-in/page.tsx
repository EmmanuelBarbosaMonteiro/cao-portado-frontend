import { Metadata } from 'next'
import dog from '@/assets/dogs.jpg'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import { Eye } from 'lucide-react'
import NavigationRegisterButton from '@/components/sign-in/go-to-register-button'

export const metadata: Metadata = {
  title: 'Login | Caoportado',
}

export default async function SignIn() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      {/* login container */}
      <div className="flex max-w-3xl rounded-xl bg-gray-100 p-5 shadow-lg">
        {/* form */}
        <div className="px-10 sm:w-1/2">
          <div className="flex items-center justify-center">
            <Image src={logo} alt="" className="h-15 w-15 -mt-8 object-cover" />
          </div>

          <h2 className="text-custom-green-500 text-2xl font-bold">Login</h2>
          <p className="mt-4 text-sm text-gray-700">
            Faca seu login ou se cadastre-se
          </p>

          <form action="" className="flex flex-col gap-4">
            <input
              className="mt-8 rounded-md border p-2"
              type="text"
              name="email"
              id="email"
              placeholder="E-mail"
            />
            <div className="relative">
              <input
                className="w-full rounded-md border p-2"
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
              />
              <Eye className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 antialiased hover:text-gray-500" />
            </div>
            <button
              disabled
              className="bg-custom-green-500 rounded-md py-2 text-gray-100 disabled:cursor-not-allowed disabled:text-neutral-50 disabled:opacity-40"
            >
              Continuar
            </button>
          </form>

          <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-500" />
            <p className="text-center text-sm">ou</p>
            <hr className="border-gray-500" />
          </div>

          <NavigationRegisterButton />

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
