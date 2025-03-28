"use client"
import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingBag } from "lucide-react"
import { useEffect, useState } from "react"
import FadeIn from "@/components/animations/fade-in"

export default function Home() {
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
    <main className="min-h-screen bg-black text-white font-sf-pro">
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
          <div className="flex items-center space-x-6">
            <button aria-label="Search" className="text-white hover:text-gray-400 transition">
              <Search className="w-[18px] h-[18px]" />
            </button>
            <button aria-label="Shopping bag" className="text-white hover:text-gray-400 transition">
              <ShoppingBag className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>
      </nav>

      {/* iPhone 16 Pro Section */}
      <section className="relative h-[100vh] flex flex-col items-center justify-center bg-black text-center px-4 overflow-hidden">
        <FadeIn delay={300} duration={1200}>
          <div className="z-10 flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-semibold mb-1">iPhone 16 Pro</h1>
            <h2 className="text-2xl md:text-3xl font-normal mb-5">Hello, Apple Intelligence.</h2>
            <div className="flex space-x-5 mt-1">
              <Link
                href="/learn-more"
                className="text-[17px] text-white bg-[#0071e3] px-[22px] py-[8px] rounded-full hover:bg-[#0077ed] transition"
              >
                Learn more
              </Link>
              <Link
                href="/buy"
                className="text-[17px] text-white bg-transparent border border-gray-600 px-[22px] py-[8px] rounded-full hover:border-gray-400 transition"
              >
                Buy
              </Link>
            </div>
          </div>
        </FadeIn>
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-1500 transform ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="relative w-full max-w-4xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[180px] md:text-[220px] font-bold text-white opacity-90 glow tracking-wide">PRO</div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] max-w-[600px]">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="iPhone 16 Pro"
                  width={1200}
                  height={600}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* iPhone 16 Section */}
      <section className="relative h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#0a1a44] to-[#0a3bbb] text-center px-4 overflow-hidden">
        <FadeIn delay={300} duration={1200}>
          <div className="z-10 flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-semibold mb-1">iPhone 16</h1>
            <h2 className="text-2xl md:text-3xl font-normal mb-5">Hello, Apple Intelligence.</h2>
            <div className="flex space-x-5 mt-1">
              <Link
                href="/learn-more"
                className="text-[17px] text-white bg-[#0071e3] px-[22px] py-[8px] rounded-full hover:bg-[#0077ed] transition"
              >
                Learn more
              </Link>
              <Link
                href="/buy"
                className="text-[17px] text-white bg-transparent border border-gray-200 px-[22px] py-[8px] rounded-full hover:border-white transition"
              >
                Buy
              </Link>
            </div>
          </div>
        </FadeIn>
        <div className="absolute inset-0 flex items-center justify-center mt-20">
          <div className="w-[80%] max-w-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="iPhone 16"
              width={1200}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Additional Product Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 bg-black">
        {/* Apple Watch */}
        <div className="bg-[#111] rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden relative h-[580px]">
          <FadeIn delay={200} duration={1000}>
            <div className="z-10">
              <h2 className="text-3xl font-semibold mb-1">Apple Watch</h2>
              <p className="text-xl mb-3">Smarter. Brighter. Mightier.</p>
              <div className="flex space-x-4 mb-6">
                <Link href="/learn-more" className="text-[#0071e3] hover:underline">
                  Learn more &gt;
                </Link>
                <Link href="/buy" className="text-[#0071e3] hover:underline">
                  Buy &gt;
                </Link>
              </div>
            </div>
          </FadeIn>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Apple Watch"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* iPad */}
        <div className="bg-[#fbfbfd] text-black rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden relative h-[580px]">
          <FadeIn delay={300} duration={1000}>
            <div className="z-10">
              <h2 className="text-3xl font-semibold mb-1">iPad</h2>
              <p className="text-xl mb-3">Lovable. Drawable. Magical.</p>
              <div className="flex space-x-4 mb-6">
                <Link href="/learn-more" className="text-[#0071e3] hover:underline">
                  Learn more &gt;
                </Link>
                <Link href="/buy" className="text-[#0071e3] hover:underline">
                  Buy &gt;
                </Link>
              </div>
            </div>
          </FadeIn>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="iPad"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Additional Product Row */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 pb-6 bg-black">
        {/* Mac */}
        <div className="bg-[#fbfbfd] text-black rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden relative h-[580px]">
          <FadeIn delay={400} duration={1000}>
            <div className="z-10">
              <h2 className="text-3xl font-semibold mb-1">MacBook Pro</h2>
              <p className="text-xl mb-3">Mind-blowing. Head-turning.</p>
              <div className="flex space-x-4 mb-6">
                <Link href="/learn-more" className="text-[#0071e3] hover:underline">
                  Learn more &gt;
                </Link>
                <Link href="/buy" className="text-[#0071e3] hover:underline">
                  Buy &gt;
                </Link>
              </div>
            </div>
          </FadeIn>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="MacBook Pro"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </div>

        {/* AirPods */}
        <div className="bg-[#111] rounded-3xl p-8 flex flex-col items-center text-center overflow-hidden relative h-[580px]">
          <FadeIn delay={500} duration={1000}>
            <div className="z-10">
              <h2 className="text-3xl font-semibold mb-1">AirPods</h2>
              <p className="text-xl mb-3">Adaptive Audio. Now playing.</p>
              <div className="flex space-x-4 mb-6">
                <Link href="/learn-more" className="text-[#0071e3] hover:underline">
                  Learn more &gt;
                </Link>
                <Link href="/buy" className="text-[#0071e3] hover:underline">
                  Buy &gt;
                </Link>
              </div>
            </div>
          </FadeIn>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="AirPods"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Vision Pro Section */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#000] to-[#222] text-center px-4 overflow-hidden my-3 mx-3 rounded-3xl">
        <FadeIn delay={300} duration={1200}>
          <div className="z-10 flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-semibold mb-1">Apple Vision Pro</h1>
            <h2 className="text-2xl md:text-3xl font-normal mb-5">Welcome to the era of spatial computing.</h2>
            <div className="flex space-x-5 mt-1">
              <Link
                href="/learn-more"
                className="text-[17px] text-white bg-[#0071e3] px-[22px] py-[8px] rounded-full hover:bg-[#0077ed] transition"
              >
                Learn more
              </Link>
              <Link
                href="/buy"
                className="text-[17px] text-white bg-transparent border border-gray-600 px-[22px] py-[8px] rounded-full hover:border-gray-400 transition"
              >
                Buy
              </Link>
            </div>
          </div>
        </FadeIn>
        <div className="absolute inset-0 flex items-center justify-center mt-20">
          <div className="w-[80%] max-w-[700px]">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Apple Vision Pro"
              width={1200}
              height={600}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f5f5f7] text-[#6e6e73] py-8 px-4 text-xs">
        <div className="max-w-[980px] mx-auto">
          <div className="border-b border-[#d2d2d7] pb-5 mb-5">
            <p className="mb-3">
              1. Apple Intelligence will be available in English (U.S.) as a free software update later this year.
            </p>
            <p>
              Apple Intelligence features will come to iPhone 16, iPhone 16 Plus, iPhone 16 Pro, iPhone 16 Pro Max,
              iPhone 15 Pro, iPhone 15 Pro Max, and iPad and Mac with M1 and later.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Shop and Learn</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Store
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Mac
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iPad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iPhone
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Watch
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Vision
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    AirPods
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    TV & Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    AirTag
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Apple Music
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple TV+
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple Fitness+
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple News+
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple Arcade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iCloud
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple One
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple Pay
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple Books
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple Podcasts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    App Store
                  </Link>
                </li>
              </ul>

              <h3 className="font-semibold mt-6 mb-3">Account</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Manage Your Apple ID
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple Store Account
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    iCloud.com
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Apple Store</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Find a Store
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Genius Bar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Today at Apple
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple Camp
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple Store App
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Certified Refurbished
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple Trade In
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Financing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Carrier Deals at Apple
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Order Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Shopping Help
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">For Business</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Apple and Business
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Shop for Business
                  </Link>
                </li>
              </ul>

              <h3 className="font-semibold mt-6 mb-3">For Education</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Apple and Education
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Shop for K-12
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Shop for College
                  </Link>
                </li>
              </ul>

              <h3 className="font-semibold mt-6 mb-3">For Healthcare</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Apple in Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Health on Apple Watch
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Apple Values</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Environment
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Inclusion and Diversity
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Racial Equity and Justice
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Supplier Responsibility
                  </Link>
                </li>
              </ul>

              <h3 className="font-semibold mt-6 mb-3">About Apple</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Newsroom
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Apple Leadership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Career Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Investors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Ethics & Compliance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact Apple
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-5 border-t border-[#d2d2d7]">
            <p className="mb-3">
              More ways to shop:{" "}
              <Link href="#" className="text-[#0071e3] hover:underline">
                Find an Apple Store
              </Link>{" "}
              or{" "}
              <Link href="#" className="text-[#0071e3] hover:underline">
                other retailer
              </Link>{" "}
              near you. Or call 1-800-MY-APPLE.
            </p>
            <div className="flex flex-col md:flex-row md:justify-between mt-5">
              <p className="mb-2 md:mb-0">Copyright © 2025 Apple Inc. All rights reserved.</p>
              <div className="flex flex-wrap space-x-6">
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:underline">
                  Terms of Use
                </Link>
                <Link href="#" className="hover:underline">
                  Sales and Refunds
                </Link>
                <Link href="#" className="hover:underline">
                  Legal
                </Link>
                <Link href="#" className="hover:underline">
                  Site Map
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

