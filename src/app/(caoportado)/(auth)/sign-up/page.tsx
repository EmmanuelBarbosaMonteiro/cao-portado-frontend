import { Eye } from 'lucide-react'
import dog from '@/assets/dogs.jpg'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cadastro | Caoportado',
}

export default async function SignUp() {
  // await new Promise((resolve) => setTimeout(resolve, 5000))

  return (
    <section className="flex min-h-screen items-center justify-center">
      {/* login container */}
      <div className="flex max-w-3xl rounded-xl bg-gray-100 p-5 shadow-lg">
        {/* form */}
        <div className="px-10 sm:w-1/2">
          <div className="flex justify-center">
            <Image
              src={logo}
              alt=""
              className="h-15 w-15 object-cover"
              width={150}
              height={150}
            />
          </div>

          <h2 className="text-custom-green-500 text-2xl font-bold">Cadastro</h2>

          <form action="" className="flex flex-col gap-4">
            <input
              className="mt-4 rounded-md border p-2"
              type="text"
              name="email"
              id="email"
              placeholder="E-mail"
            />

            <input
              className="rounded-md border p-2"
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
            />

            <input
              className="rounded-md border p-2"
              type="text"
              name="surname"
              id="surname"
              placeholder="Sobrenome"
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

            <div className="relative">
              <input
                className="w-full rounded-md border p-2"
                type="re-password"
                name="re-password"
                id="re-password"
                placeholder="Confirme a senha"
              />
              <Eye className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 antialiased hover:text-gray-500" />
            </div>
            <button className="bg-custom-green-500 mt-6 rounded-md py-2 text-gray-50 hover:opacity-80 disabled:cursor-not-allowed disabled:bg-green-200 disabled:text-gray-400">
              Continuar
            </button>
          </form>
        </div>

        {/* image */}
        <div className="hidden w-1/2 p-0 sm:block">
          <Image src={dog} alt="" className="h-full rounded-xl object-cover" />
        </div>
      </div>
    </section>
  )
}
