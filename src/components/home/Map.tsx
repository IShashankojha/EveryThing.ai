import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    <div className="min-h-[400px] bg-gray-50 dark:bg-gray-900 relative overflow-hidden rounded-3xl mt-[-4rem] mb-16 px-4 sm:px-6 lg:px-8">
      {/* Dotted Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #9ca3af 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Additional scattered dots for world map effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #6b7280 0.5px, transparent 0.5px)`,
          backgroundSize: "40px 40px",
          backgroundPosition: "10px 10px",
        }}
      />

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
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-purple-200/50 max-w-full sm:max-w-2xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Join Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mission
              </span>
            </h1>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              Help us reimagine the future of hiring in the tech industry.
            </p>

            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-medium text-base sm:text-lg">
              Start Here
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60"></div>
          <div className="absolute -bottom-4 -left-4 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-40"></div>
        </div>
      </div>

      {/* Additional floating elements for depth */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute bottom-32 right-32 w-3 h-3 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-pink-400 rounded-full opacity-50"></div>
    </div>
  )
}
