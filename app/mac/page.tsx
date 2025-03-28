import Link from "next/link"
import Image from "next/image"

export default function MacPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation - simplified for this example */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-3 bg-black/90 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="text-white">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16">
            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
          </svg>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Mac</h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">Powerful. Beautiful. Magical.</p>
      </section>

      {/* Featured Mac */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-center px-4">
        <div className="z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">MacBook Pro</h2>
          <p className="text-xl md:text-2xl mb-6">Mind-blowing. Head-turning.</p>
          <div className="flex space-x-4">
            <Link
              href="/learn-more"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Learn more
            </Link>
            <Link
              href="/buy"
              className="bg-transparent border border-gray-600 text-white px-6 py-2 rounded-full hover:border-gray-400 transition"
            >
              Buy
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center mt-20">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="MacBook Pro"
            width={1200}
            height={600}
            className="object-contain"
          />
        </div>
      </section>

      {/* Mac Models */}
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Explore Mac models</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* MacBook Air */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="MacBook Air"
              width={300}
              height={200}
              className="object-contain mb-6"
            />
            <h3 className="text-2xl font-semibold">MacBook Air</h3>
            <p className="text-xl mb-2">Power. It's in the Air.</p>
            <p className="text-gray-400 mb-4">From $999</p>
            <div className="flex space-x-4">
              <Link href="/mac/macbook-air" className="text-blue-500 hover:underline">
                Learn more
              </Link>
              <Link href="/buy/macbook-air" className="text-blue-500 hover:underline">
                Buy
              </Link>
            </div>
          </div>

          {/* MacBook Pro */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="MacBook Pro"
              width={300}
              height={200}
              className="object-contain mb-6"
            />
            <h3 className="text-2xl font-semibold">MacBook Pro</h3>
            <p className="text-xl mb-2">Supercharged for pros.</p>
            <p className="text-gray-400 mb-4">From $1299</p>
            <div className="flex space-x-4">
              <Link href="/mac/macbook-pro" className="text-blue-500 hover:underline">
                Learn more
              </Link>
              <Link href="/buy/macbook-pro" className="text-blue-500 hover:underline">
                Buy
              </Link>
            </div>
          </div>

          {/* iMac */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/placeholder.svg?height=200&width=300"
              alt="iMac"
              width={300}
              height={200}
              className="object-contain mb-6"
            />
            <h3 className="text-2xl font-semibold">iMac</h3>
            <p className="text-xl mb-2">Say hello to the new iMac.</p>
            <p className="text-gray-400 mb-4">From $1299</p>
            <div className="flex space-x-4">
              <Link href="/mac/imac" className="text-blue-500 hover:underline">
                Learn more
              </Link>
              <Link href="/buy/imac" className="text-blue-500 hover:underline">
                Buy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mac Features */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Mac</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">Apple Silicon</h3>
              <p className="text-gray-400 mb-6">
                Our most powerful chips deliver incredible performance and enable groundbreaking technologies.
              </p>
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Apple Silicon"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold mb-4">macOS</h3>
              <p className="text-gray-400 mb-6">macOS is the most advanced desktop operating system in the world.</p>
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="macOS"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Footer */}
      <footer className="bg-gray-100 text-gray-600 py-8 px-4 text-sm">
        <div className="max-w-7xl mx-auto">
          <p className="text-center">Copyright © 2025 Apple Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

