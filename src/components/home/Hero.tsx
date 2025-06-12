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
              <h1 className=" text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-relaxed text-[hsl(var(--foreground))]">
                Shaping the Next
                <br />
                Generation of HR <span className="text-pink-600 dark:text-pink-400">Tech</span>
                <br />
                <span className="text-purple-600 dark:text-purple-400">Recruitment.</span>
              </h1>
            </div>

            {/* Description */}
            <div className="max-w-lg">
              <p className="text-lg leading-relaxed text-[hsl(var(--foreground))]">
                At Everything Talent, we help you launch your recruitment into a new dimension.
              </p>
            </div>

            {/* CTA Button */}
            <div className="relative p-1 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-400 inline-block">
              <button className="inline-flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-300">
                Start for Free Today
                <ArrowRight className="h-5 w-5" />
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
