"use client"
import { useRef } from "react"
import { motion } from "framer-motion"

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string }
    end: { lat: number; lng: number; label?: string }
  }>
  lineColor?: string
}

export function WorldMap({ dots = [], lineColor = "#3b82f6" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360)
    const y = (90 - lat) * (400 / 180)
    return { x, y }
  }

  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2
    const midY = Math.min(start.y, end.y) - 50
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`
  }

  // Generate dotted world map pattern
  const generateWorldDots = () => {
    const dots = []
    const spacing = 6
    const width = 800
    const height = 400

    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        // Create world map shape by defining continents
        const isLand =
          // North America
          (x > 80 && x < 220 && y > 80 && y < 280 && Math.random() > 0.3) ||
          // South America
          (x > 140 && x < 200 && y > 280 && y < 380 && Math.random() > 0.4) ||
          // Europe
          (x > 280 && x < 360 && y > 60 && y < 180 && Math.random() > 0.3) ||
          // Africa
          (x > 280 && x < 360 && y > 180 && y < 350 && Math.random() > 0.3) ||
          // Asia
          (x > 360 && x < 580 && y > 40 && y < 280 && Math.random() > 0.3) ||
          // Australia
          (x > 520 && x < 580 && y > 300 && y < 360 && Math.random() > 0.4)

        if (isLand) {
          dots.push(
            <circle key={`${x}-${y}`} cx={x} cy={y} r="0.8" fill="currentColor" className="text-gray-400 opacity-60" />,
          )
        }
      }
    }
    return dots
  }

  return (
    <div className="w-full aspect-[2/1] bg-gray-50 rounded-lg relative font-sans overflow-hidden">
      {/* Dotted World Map Background */}
      <svg viewBox="0 0 800 400" className="w-full h-full absolute inset-0 pointer-events-none select-none">
        {/* Background dots pattern */}
        <g className="opacity-40">{generateWorldDots()}</g>

        {/* Connection paths */}
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng)
          const endPoint = projectPoint(dot.end.lat, dot.end.lng)
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="2"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.3 * i,
                  ease: "easeOut",
                }}
              />
            </g>
          )
        })}

        {/* Gradient definition */}
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Connection points with pulsing animation */}
        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            {/* Start point */}
            <g>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="3"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="3"
                fill={lineColor}
                opacity="0.6"
              >
                <animate attributeName="r" from="3" to="12" dur="2s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="2s" begin="0s" repeatCount="indefinite" />
              </circle>
            </g>
            {/* End point */}
            <g>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="3"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="3"
                fill={lineColor}
                opacity="0.6"
              >
                <animate attributeName="r" from="3" to="12" dur="2s" begin="0.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.6" to="0" dur="2s" begin="0.5s" repeatCount="indefinite" />
              </circle>
            </g>
          </g>
        ))}

        {/* City Labels */}
        {dots.map((dot, i) => (
          <g key={`labels-${i}`}>
            {dot.start.label && (
              <text
                x={projectPoint(dot.start.lat, dot.start.lng).x}
                y={projectPoint(dot.start.lat, dot.start.lng).y - 15}
                textAnchor="middle"
                className="fill-gray-600 text-sm font-medium"
                style={{ fontSize: "12px" }}
              >
                {dot.start.label}
              </text>
            )}
            {dot.end.label && (
              <text
                x={projectPoint(dot.end.lat, dot.end.lng).x}
                y={projectPoint(dot.end.lat, dot.end.lng).y - 15}
                textAnchor="middle"
                className="fill-gray-600 text-sm font-medium"
                style={{ fontSize: "12px" }}
              >
                {dot.end.label}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  )
}
