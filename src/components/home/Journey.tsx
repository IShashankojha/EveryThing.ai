"use client"

import Lenis from 'lenis'
import { useEffect } from "react"
import { useTransform, motion, useScroll } from "framer-motion"
import type { MotionValue } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Mail } from "lucide-react"

const journeyData = [
	{
		year: "2022",
		title: "The Beginning",
		description:
			"Everything AI was officially launched! Released initial AI-powered automation features for data processing and visualization, setting a foundation for growth in intelligent data solutions.",
		src: "/Stack1.png",
		link: "/Stack1.png",
		color: "#8f89ff",
		stats: [
			{ value: "10+", label: "Features" },
			{ value: "1M+", label: "DataProcessed" },
			{ value: "1K+", label: "Clients" },
		],
	},
	{
		year: "2023",
		title: "ML Integration",
		description:
			"Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%. Everything AI also launched its first integration with popular CRM tools, allowing seamless data sharing.",
		src: "/stack3.png",
		link: "/stack3.png",
		color: "#13006c",
		stats: [
			{ value: "+30%", label: "Accuracy" },
			{ value: "15+", label: "Integrations" },
			{ value: "25K+", label: "Users" },
		],
	},
	{
		year: "2024",
		title: "Everything AI 2.0",
		description:
			"Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
		src: "/stack2.png",
		link: "/stack2.png",
		color: "#5196fd",
		stats: [
			{ value: "50K+", label: "Users" },
			{ value: "98%", label: "Accuracy" },
			{ value: "2x faster", label: "Processing" },
		],
	},
]

export default function JourneySection() {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	})

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			wheelMultiplier: 1,
			smoothWheel: true,
		})

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)

		return () => {
			lenis.destroy()
		}
	}, [])

	return (
	<main className="relative min-h-screen bg-background selection:bg-blue-200" ref={container}>
			<>
				<section className="text-gray-900 dark:text-white h-[50vh] w-full grid place-content-center relative">
					 
					<div className="container mx-auto px-6 text-center relative z-10 space-y-8">
						<div className="inline-block rounded-lg bg-white dark:bg-gray-50 border-gray-200/50 dark:border-gray-700/50 px-2 py-1  backdrop-blur-sm shadow-sm text-sm">
							<span className="text-gray-900 dark:text-purple text-sm tracking-wide ">
								Our Values & Milestones
							</span>
						</div>
						<h1 className="text-black dark:text-gray-400 text-2xl lg:text-4xl font-bold leading-tight tracking-tight">
							Our{" "}
							<span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
								Journey
							</span>
						</h1>

						<p className="text-white to to-black dark:text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed font-semibold">
							Explore the milestones that have shaped our path to innovation, where every step brings us closer to
							transforming the future.
						</p>
					 <div className="relative z-10 flex items-center justify-center gap-5">
   					 <button className="whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative inline-flex cursor-pointer items-center justify-center bg-black font-medium text-white dark:text-white transition-all duration-500 ease-in-out border border-transparent hover:border-purple-600 hover:ring-2 hover:ring-purple-600 hover:outline-2 hover:outline-purple-600 [&>span]:relative [&>span]:z-10 h-11 rounded-md px-10 text-sm sm:text-md">
        					Subscribe to Updates  
			<svg className="ml-2 -mr-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            		<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
            		<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z">
					</path>
        </svg>  
    </button>
</div>
</div>
				</section>
			</>

			<section className="w-full">
{journeyData.map((project, i) => {
	const targetScale = 1 - (journeyData.length - i) * 0.05
	return (
		<Card
			key={`journey_${i}`}
			i={i}
			url={project?.link}
			year={project?.year}
			title={project?.title}
			description={project?.description}
			stats={project?.stats}
			color={project?.color}
			progress={scrollYProgress}
			range={[i * 0.25, 1]}
			targetScale={targetScale}
		/>
	)
})}
			</section>
 
		</main>
	)
}

interface CardProps {
	i: number
	year: string
	title: string
	description: string
	url: string
	color: string
	stats: { value: string; label: string }[]
	progress: MotionValue<number>
	range: [number, number]
	targetScale: number
}

export const Card: React.FC<CardProps> = ({
	i,
	year,
	title,
	description,
	url,
	color,
	stats,
	progress,
	range,
	targetScale,
}) => {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "start start"],
	})

	const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
	const scale = useTransform(progress, range, [1, targetScale])

	return (
		<div ref={container} className="w-full flex items-center justify-center sticky top-0">
<motion.div
  style={{
    scale,
    top: `calc(-5vh + ${i * 25}px)`,
  }}
  className="flex flex-col relative -top-[30%] min-h-[500px] w-full max-w-6xl rounded-3xl px-8 p-10 origin-top shadow-2xl bg-blue-200 text-black dark:bg-gradient-to-br dark:from-black dark:via-slate-900 dark:to-slate-950 dark:text-white"
>
					<div className="flex h-full gap-6">
				 
					{/* Left Content Section */}
					<div className="relative w-full sm:w-[40%] flex flex-col justify-between">
						{/* Title and Year at the top */}
						<div className="mb-4 sm:mb-6">
							<div className="inline-flex py-1 sm:py-2 rounded-full bg-foreground">
								<span className="text-purple-700 dark:text-purple-300 font-medium text-xs sm:text-sm tracking-wide uppercase">{title}</span>
							</div>
							<h2 className="relative-flex text-xl sm:text-2xl md:text-3xl font-bold text-white text-foreground mt-0">{year}</h2>
						</div>
						<div className="space-y-4 sm:space-y-6 mt-0">
							<p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-md leading-relaxed mt-0">{description}</p>
							
							{/* Stats Grid */}
							<div className="grid grid-cols-2 gap-3 sm:gap-4">
								{stats.map((stat, statIndex) => (
<div
  key={statIndex}
  className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-blue-200 dark:bg-gray-800/60 p-2
  transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group
  hover:bg-gradient-to-br hover:from-purple-50 hover:to-white dark:hover:from-purple-900/20 dark:hover:to-gray-800"
>
										<div className="text-sm sm:text-md lg:text-xl font-bold text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 mb-1">{stat.value}</div>
										<div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm md:text-sm">{stat.label}</div>
									</div>
								))}
							</div>
						</div>

						<span className="flex items-center gap-10 pt-8">
							<a href="#" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium text-sm cursor-pointer transition-colors">
								Learn more
							</a>
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="text-purple-600 dark:text-purple-400"
							>
								<path
									d="M17.5 12h-15m15 0L12 7m5.5 5L12 17"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>
					</div>

					{/* Right Image Section - Fixed to match stacking card */}
					<div className="relative w-[70%] min-h-full rounded-2xl overflow-hidden">
						<motion.div 
							className="w-full h-full" 
							style={{ scale: imageScale }}
						>
							<Image 
								src={url || "/placeholder.svg"} 
								alt={`${title} - ${year}`} 
								fill
								className="object-cover" 
								priority
							/>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	)
}
