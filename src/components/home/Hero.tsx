import Image from "next/image"
import { ArrowRight } from "lucide-react"


export default function HeroSection() {
  return (
    <div className="relative w-full bg-background dark:bg-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-gray-300/50 dark:border-gray-700/50"></div>
        <div className="absolute top-20 left-20 w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-gray-300/20 dark:border-gray-700/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative pt-8 pb-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20 h-full">
          {/* Left Content */}
          <div className="space-y-6 text-white">
            {/* About Us Label */}
            <div>
              <p className="text-xs font-semibold uppercase leading-relaxed text-[hsl(var(--foreground))]">ABOUT US</p>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-relaxed text-[hsl(var(--foreground))]">
                Shaping the Next
                <br />
                Generation of HR <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">Tech</span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 via-blue-400 to-yellow-500 bg-clip-text text-transparent">Recruitment.</span>
              </h1>
            </div>

            {/* Description */}
            <div className="max-w-md">
              <p className="text-md leading-relaxed text-black-200 dark:text-gray-500">
                At Everything Talent, we help you launch your recruitment into a new dimension.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative inline-flex cursor-pointer items-center justify-center bg-black font-medium text-white dark:text-white transition-all duration-500 ease-in-out border border-transparent hover:border-purple-600 hover:ring-2 hover:ring-purple-600 hover:outline-2 hover:outline-purple-600 [&>span]:relative [&>span]:z-10 h-11 rounded-md px-8 text-sm sm:text-md">
                Start for Free Today
                <svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a 1 1 0 010 1.414l-6 6a 1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:ml-10">
            {/* Gradient Border Container */}
            <div className="relative p-1 rounded-3xl bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-400 shadow-2xl">
              <div className="overflow-hidden rounded-3xl bg-white dark:bg-gray-900">
                <Image
                  src="/heroBg2.webp"
                  alt="Team meeting with HR analytics dashboard displayed on screen"
                  width={1000}
                  height={1200}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Additional decorative gradient glow - Updated colors */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-amber-400/20 rounded-3xl blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
