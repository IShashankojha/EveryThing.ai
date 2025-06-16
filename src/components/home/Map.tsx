import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { WorldMap } from "@/components/ui/world-map"
const cities = [
  { name: "Alaska", x: "8%", y: "25%" },
  { name: "Los Angeles", x: "18%", y: "45%" },
  { name: "Brazil", x: "40%", y: "75%" },
  { name: "Nairobi", x: "65%", y: "65%" },
  { name: "New Delhi", x: "78%", y: "45%" },
  { name: "Vladivostok", x: "92%", y: "35%" },
]

const connections = [
  // Alaska to Los Angeles
  { from: { x: "8%", y: "25%" }, to: { x: "18%", y: "45%" }, curve: "M 8 25 Q 10 35 18 45" },
  // Los Angeles to Brazil
  { from: { x: "18%", y: "45%" }, to: { x: "40%", y: "75%" }, curve: "M 18 45 Q 25 65 40 75" },
  // Brazil to Nairobi
  { from: { x: "40%", y: "75%" }, to: { x: "65%", y: "65%" }, curve: "M 40 75 Q 52 70 65 65" },
  // Nairobi to New Delhi
  { from: { x: "65%", y: "65%" }, to: { x: "78%", y: "45%" }, curve: "M 65 65 Q 70 55 78 45" },
  // New Delhi to Vladivostok
  { from: { x: "78%", y: "45%" }, to: { x: "92%", y: "35%" }, curve: "M 78 45 Q 85 40 92 35" },
]

export default function Component() {
  return (
    <section className="relative">
      {/* Background container matching layout max width and padding */}
      <div className="fixed h-full bg-gray-50 pointer-events-none select-none -z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
        <WorldMap />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 opacity-30 pointer-events-none rounded-none" />
      </div>

      {/* Content container */}
      <div className="min-h-[400px] relative rounded-3xl mt-16 mb-16 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto bg-transparent">
        {/* SVG for connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
          {connections.map((connection, index) => (
            <path
              key={index}
              d={connection.curve}
              stroke="url(#lineGradient)"
              strokeWidth="0.3"
              fill="none"
              className="animate-pulse"
              style={{
                animationDelay: `${index * 0.5}s`,
                animationDuration: "3s",
              }}
            />
          ))}
        </svg>

        {/* City markers */}
        {cities.map((city) => (
          <div
            key={city.name}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: city.x, top: city.y }}
          >
            <div className="relative">
              <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg animate-pulse" />
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs font-medium text-gray-700 bg-white/80 px-2 py-1 rounded-md shadow-sm">
                  {city.name}
                </span>
              </div>
            </div>
          </div>
        ))}

        {/* Central Mission Card */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="max-w-4xl w-full h-[400px] rounded-xl bg-gradient-to-r from-rose-100 to-blue-300 bg-opacity-70  shadow-md overflow-hidden  opacity-80 flex flex-col justify-center items-center px-10 py-12 mx-auto">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Join Our{" "}
              <span className="bg-gradient-to-r from-pink-600 via-cyan-500 to-yellow-500 bg-clip-text text-transparent">
                Mission
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-800 max-w-lg text-center">
              Help us reimagine the future of hiring in the tech industry.
            </p>
            <button className="flex flex-col sm:flex-row gap-2 mt-8 px-6 py-3 bg-black text-white rounded-md hover: hover:border-purple-600 hover:ring-2 hover:ring-purple-600 hover:outline-2 hover:outline-purple-600 transition duration-300 ease-in-out">
              Start Here
              <svg className="w-4 h-6 group-hover:translate-x-1 transition" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a 1 1 0 010 1.414l-6 6a 1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>

            </button>
          </div>
        </div>

        {/* Additional floating elements for depth */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-32 right-32 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-pink-400 rounded-full opacity-50"></div>
      </div>
    </section>
  )
}
