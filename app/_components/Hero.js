import React from 'react'

const Hero = () => {
  return (
    <div>
<section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-900">
          Upload with <span className="font-extrabold text-gray-500">Ease, </span>Keep It <span className="font-extrabold text-gray-500">Safe, </span>Share <span className="font-extrabold text-gray-500">Instantly. </span>
          <strong className="block sm:block text-gray-900 sm:mt-3 md/lg:mt-3">ANYSHARE: Your File Control Hub!</strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed text-gray-900">
          Just drag and drop onto our secure cloud. Add a password for extra protection, then send the link via email to your friends.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-gray-900 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-700 focus:outline-none focus:ring active:bg-gray-500 sm:w-auto"
          href="/get-started"
        >
          Try It Now
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium bg-white-800 text-gray-600 transition hover:text-gray-600/75 shadow focus:outline-none focus:ring active:text-gray-500 sm:w-auto"
          href="/about"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero