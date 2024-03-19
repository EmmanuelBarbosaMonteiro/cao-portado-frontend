import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Caoportado | Home',
}

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 5000))

  return (
    <div className="px-4 pt-8 text-zinc-800">
      <h1 className="flex items-center justify-start gap-1 text-3xl font-bold before:flex before:h-8 before:w-0.5 before:bg-green-700">
        Caoportado
      </h1>
      <h2 className="flex items-center justify-start py-4">
        O seu caozinho em boas mãos!
      </h2>
      <div className="flex flex-col items-start justify-start gap-4">
        <button className="w-full rounded-md bg-green-600 px-4 py-2 font-normal hover:bg-green-700">
          Login
        </button>
        <button className="w-full rounded-md bg-green-600 px-4 py-2 font-normal hover:bg-green-700">
          Cadastro
        </button>
      </div>
    </div>
  )
}
