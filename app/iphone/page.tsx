"use client"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import FadeIn from "@/components/animations/fade-in"

export default function IPhonePage() {
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-sf-pro">
      {/* Navigation */}
      <nav
        className={`flex items-center justify-center px-4 md:px-8 py-3 fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md" : "bg-black/95"
        }`}
      >
        <div className="max-w-[980px] w-full flex items-center justify-between">
          <div className="flex items-center space-x-8 md:space-x-10 text-xs">
            <Link href="/" className="text-white">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 17 17">
                <path d="M8.7 0c-.5 0-1.2.2-1.9.6C6 1.1 5.4 1.9 5 2.7c-.3.6-.4 1.1-.4 1.6 0 .5.1 1 .4 1.4.3.4.6.7 1 .9.4.2.9.4 1.5.4.5 0 1.1-.2 1.6-.5.6-.3 1.1-.8 1.4-1.4.3-.5.5-1.1.5-1.7 0-.5-.1-1-.4-1.5-.3-.5-.7-.9-1.2-1.2-.5-.5-1.1-.7-1.7-.7zm5.3 7.9c-.7 0-1.5.2-2.2.6-.6.3-1.1.7-1.5 1.1-.3.3-.7.8-1.1 1.6-.4.7-.6 1.5-.7 2.1 0 .7.1 1.4.4 2 .3.7.7 1.2 1.2 1.6.5.4 1.1.6 1.8.6.5 0 1-.1 1.5-.3.3-.1.7-.3 1.1-.6.4-.3.7-.5.9-.6.3-.2.6-.3.9-.3.3 0 .6.1.9.3.2.1.5.3.9.6.4.3.8.5 1.1.6.5.2 1 .3 1.5.3.7 0 1.3-.2 1.8-.6.5-.4.9-1 1.2-1.6.3-.6.4-1.3.4-2v-.2c0-.7-.2-1.5-.6-2.2-.4-.7-.8-1.2-1.3-1.5-.5-.3-1-.6-1.5-.8-.5-.2-1-.3-1.6-.3-.6 0-1.1.1-1.6.3-.4.2-.8.4-1.1.6-.3.2-.6.4-.9.6-.3.2-.6.3-.9.3-.3 0-.6-.1-.9-.3-.3-.2-.6-.4-.9-.6-.3-.2-.7-.4-1.1-.6-.4-.3-.9-.4-1.5-.4z" />
              </svg>
            </Link>
            <Link href="/store" className="hidden md:block hover:text-gray-400 transition">
              Store
            </Link>
            <Link href="/mac" className="hidden md:block hover:text-gray-400 transition">
              Mac
            </Link>
            <Link href="/ipad" className="hidden md:block hover:text-gray-400 transition">
              iPad
            </Link>
            <Link href="/iphone" className="hidden md:block hover:text-gray-400 transition">
              iPhone
            </Link>
            <Link href="/watch" className="hidden md:block hover:text-gray-400 transition">
              Watch
            </Link>
            <Link href="/vision" className="hidden md:block hover:text-gray-400 transition">
              Vision
            </Link>
            <Link href="/airpods" className="hidden md:block hover:text-gray-400 transition">
              AirPods
            </Link>
            <Link href="/tv-home" className="hidden md:block hover:text-gray-400 transition">
              TV & Home
            </Link>
            <Link href="/entertainment" className="hidden md:block hover:text-gray-400 transition">
              Entertainment
            </Link>
            <Link href="/accessories" className="hidden md:block hover:text-gray-400 transition">
              Accessories
            </Link>
            <Link href="/support" className="hidden md:block hover:text-gray-400 transition">
              Support
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-[80px] pb-10 text-center">
        <FadeIn delay={300} duration={1200}>
          <h1 className="text-5xl md:text-6xl font-semibold mb-2">iPhone</h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto px-4">
            The ultimate iPhone experience. Explore iPhone models, features, and more.
          </p>
        </FadeIn>
      </section>

      {/* iPhone Models */}
      <section className="px-4 py-10 max-w-[980px] mx-auto">
        <FadeIn delay={400} duration={1200}>
          <h2 className="text-3xl font-semibold mb-12 text-center">Which iPhone is right for you?</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* iPhone 16 Pro */}
          <FadeIn delay={500} duration={1000}>
            <div className="flex flex-col items-center text-center">
              <div className="h-[300px] flex items-center justify-center mb-4">
                <Image
                  src="/images/iphone-16-pro.png"
                  alt="iPhone 16 Pro"
                  width={200}
                  height={300}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold">iPhone 16 Pro</h3>
              <p className="text-xl mb-2">The ultimate iPhone.</p>
              <p className="text-gray-400 mb-4">From $999</p>
              <Link href="/iphone/iphone-16-pro" className="text-[#0071e3] flex items-center hover:underline">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/buy/iphone-16-pro" className="text-[#0071e3] flex items-center hover:underline mt-2">
                Buy <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </FadeIn>

          {/* iPhone 16 */}
          <FadeIn delay={600} duration={1000}>
            <div className="flex flex-col items-center text-center">
              <div className="h-[300px] flex items-center justify-center mb-4">
                <Image
                  src="/images/iphone-16.png"
                  alt="iPhone 16"
                  width={200}
                  height={300}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold">iPhone 16</h3>
              <p className="text-xl mb-2">A total powerhouse.</p>
              <p className="text-gray-400 mb-4">From $799</p>
              <Link href="/iphone/iphone-16" className="text-[#0071e3] flex items-center hover:underline">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/buy/iphone-16" className="text-[#0071e3] flex items-center hover:underline mt-2">
                Buy <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </FadeIn>

          {/* iPhone 15 */}
          <FadeIn delay={700} duration={1000}>
            <div className="flex flex-col items-center text-center">
              <div className="h-[300px] flex items-center justify-center mb-4">
                <Image
                  src="/images/iphone-16.png"
                  alt="iPhone 15"
                  width={200}
                  height={300}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold">iPhone 15</h3>
              <p className="text-xl mb-2">As amazing as ever.</p>
              <p className="text-gray-400 mb-4">From $699</p>
              <Link href="/iphone/iphone-15" className="text-[#0071e3] flex items-center hover:underline">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/buy/iphone-15" className="text-[#0071e3] flex items-center hover:underline mt-2">
                Buy <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </FadeIn>

          {/* iPhone SE */}
          <FadeIn delay={800} duration={1000}>
            <div className="flex flex-col items-center text-center">
              <div className="h-[300px] flex items-center justify-center mb-4">
                <Image
                  src="/images/iphone-16.png"
                  alt="iPhone SE"
                  width={200}
                  height={300}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold">iPhone SE</h3>
              <p className="text-xl mb-2">Serious power. Serious value.</p>
              <p className="text-gray-400 mb-4">From $429</p>
              <Link href="/iphone/iphone-se" className="text-[#0071e3] flex items-center hover:underline">
                Learn more <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
              <Link href="/buy/iphone-se" className="text-[#0071e3] flex items-center hover:underline mt-2">
                Buy <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-[#111]">
        <div className="max-w-[980px] mx-auto">
          <FadeIn delay={300} duration={1200}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Explore iPhone features</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={400} duration={1000}>
              <div className="bg-black p-8 rounded-3xl">
                <div className="mb-6 h-[200px] flex items-center justify-center">
                  <Image
                    src="/images/apple-watch.png"
                    alt="Apple Intelligence"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Apple Intelligence</h3>
                <p className="text-gray-400 text-center">
                  Experience the power of personal intelligence that's grounded in your context.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={500} duration={1000}>
              <div className="bg-black p-8 rounded-3xl">
                <div className="mb-6 h-[200px] flex items-center justify-center">
                  <Image src="/images/iphone-16-pro.png" alt="Camera" width={200} height={200} className="mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Pro Camera System</h3>
                <p className="text-gray-400 text-center">
                  Capture stunning photos and videos with the advanced camera system.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={600} duration={1000}>
              <div className="bg-black p-8 rounded-3xl">
                <div className="mb-6 h-[200px] flex items-center justify-center">
                  <Image src="/images/iphone-16.png" alt="Performance" width={200} height={200} className="mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">A17 Pro Chip</h3>
                <p className="text-gray-400 text-center">
                  Breakthrough performance and all-day battery life with the A17 Pro chip.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Ways to Buy Section */}
      <section className="py-16 px-4">
        <div className="max-w-[980px] mx-auto text-center">
          <FadeIn delay={300} duration={1200}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-12">Ways to Buy iPhone</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <FadeIn delay={400} duration={1000}>
              <div>
                <div className="h-[80px] flex items-center justify-center mb-4">
                  <Image
                    src="/images/apple-watch.png"
                    alt="Trade In"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Get a trade-in credit</h3>
                <p className="text-gray-400">
                  Get credit toward a new iPhone when you trade in your eligible smartphone.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={500} duration={1000}>
              <div>
                <div className="h-[80px] flex items-center justify-center mb-4">
                  <Image
                    src="/images/apple-watch.png"
                    alt="Monthly Payments"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Pay monthly</h3>
                <p className="text-gray-400">
                  Pay over time, interest-free when you choose to check out with Apple Card Monthly Installments.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={600} duration={1000}>
              <div>
                <div className="h-[80px] flex items-center justify-center mb-4">
                  <Image
                    src="/images/apple-watch.png"
                    alt="Delivery"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Free delivery</h3>
                <p className="text-gray-400">Get free delivery or pick up at your Apple Store.</p>
              </div>
            </FadeIn>
          </div>

          <Link
            href="/store"
            className="bg-[#0071e3] text-white px-[22px] py-[8px] rounded-full hover:bg-[#0077ed] transition inline-block text-[17px]"
          >
            Shop iPhone
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f5f5f7] text-[#6e6e73] py-8 px-4 text-xs">
        <div className="max-w-[980px] mx-auto">
          <p className="text-center">Copyright © 2025 Apple Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

