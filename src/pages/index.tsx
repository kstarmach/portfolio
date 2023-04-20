import Image from 'next/image'

const UrlItem = () => {
  return (

    <div className="relative  ">
      <a href="#"
        className="
        text-base 
        font-medium
        text-gray-900
        hover:text-gray-600 
        border-solid border-2
         border-gray-200 
         rounded
         p-6
         me-2
         ">
        GitHub &#x2197;
      </a>
      <a href="#"
        className="
        text-base 
        font-medium
        text-gray-900
        hover:text-gray-600 
        border-solid border-2
         border-gray-200 
         rounded
         p-6
         ">
        LinkedIn &#x2197;
      </a>
    </div>
  )
}

export default function Home() {

  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

        <h1 className="text-3xl font-extrabold text-gray-900">Kamil Starmach</h1>

        <p className="mt-4 max-w-2xl text-xl text-gray-500">
          Hi, I&apos;m Kamil. Self proclaimed <b>full stack developer</b> who tries to learn everything at once, in no particular order.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <UrlItem />
        </div>
      </div>
    </div>
  )
}
